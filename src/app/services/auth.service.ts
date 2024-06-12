import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {environment} from '@environments/environment';
import {User} from '@shared/interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<any>(`${environment.baseUrl}${environment.endpoints.login}`, {email, password}).pipe(
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
      .post(
        `${environment.baseUrl}${environment.endpoints.register}`,
        {email, password, firstName, lastName},
        {responseType: 'text'}
      )
      .pipe(switchMap(() => this.login(email, password)));
  }

  getCurrentUser(): Observable<User> {
    if (this.currentUserSubject.getValue()) {
      return this.currentUserSubject as Observable<User>;
    } else {
      const token = localStorage.getItem('accessToken');
      const headers = new HttpHeaders({Authorization: `Bearer ${token}`});

      return this.http.get<User>(`${environment.baseUrl}${environment.endpoints.user}`, {headers}).pipe(
        map((user) => {
          this.currentUserSubject.next(user);
          return user;
        })
      );
    }
  }

  logout(): Observable<string> {
    const token = localStorage.getItem('accessToken');
    const headers = new HttpHeaders({Authorization: `Bearer ${token}`});

    return this.http
      .post(`${environment.baseUrl}${environment.endpoints.logout}`, {}, {headers, responseType: 'text'})
      .pipe(
        tap(() => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          this.currentUserSubject.next(null);
        })
      );
  }
}
