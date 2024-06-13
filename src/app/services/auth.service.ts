import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {environment} from '@environments/environment';
import {User} from '@shared/interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private loginUrl = `${environment.baseUrl}/login`;
  private registerUrl = `${environment.baseUrl}/register`;
  private userUrl = `${environment.baseUrl}/user`;
  private logoutUrl = `${environment.baseUrl}/logout`;

  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private get token(): string | null {
    return localStorage.getItem('accessToken');
  }

  private get headers(): HttpHeaders {
    return new HttpHeaders({Authorization: `Bearer ${this.token}`});
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<any>(this.loginUrl, {email, password}).pipe(
      map((response) => {
        if (response && response.accessToken && response.refreshToken) {
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('refreshToken', response.refreshToken);
        }
        return response.accessToken;
      }),
      switchMap(() => this.getCurrentUser())
    );
  }

  register(email: string, password: string, firstName: string, lastName: string): Observable<User> {
    return this.http
      .post(this.registerUrl, {email, password, firstName, lastName}, {responseType: 'text'})
      .pipe(switchMap(() => this.login(email, password)));
  }

  getCurrentUser(): Observable<User> {
    if (this.currentUserSubject.getValue()) {
      return this.currentUserSubject as Observable<User>;
    } else {
      return this.http.get<User>(this.userUrl, {headers: this.headers}).pipe(
        map((user) => {
          this.currentUserSubject.next(user);
          return user;
        })
      );
    }
  }

  logout(): Observable<string> {
    return this.http.post(this.logoutUrl, {}, {headers: this.headers, responseType: 'text'}).pipe(
      tap(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        this.currentUserSubject.next(null);
      })
    );
  }
}
