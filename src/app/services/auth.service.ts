import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import { loginUrl, refreshUrl, registerUrl, userUrl } from '@environments/environment';
import {User} from '@shared/interfaces/user.interface';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User | null>;
    public currentUser: Observable<User | null>;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('currentUser');
    const initialUser = storedUser ? JSON.parse(storedUser) : null;
    this.currentUserSubject = new BehaviorSubject<User | null>(initialUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<any>(loginUrl, {email, password}).pipe(
      map((response) => {
        if (response && response.accessToken) {
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('refreshToken', response.refreshToken);
        }
        return response.accessToken;
      }),
      switchMap(() => this.getCurrentUser())
    );
  }

  register(email: string, password: string, firstName: string, lastName: string): Observable<User> {
    return this.http.post(registerUrl, { email, password, firstName, lastName }, { responseType: 'text' }).pipe(
      switchMap(() => this.login(email, password))
    );
  }
  
  getCurrentUser(): Observable<User> {
    const token = localStorage.getItem('accessToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<User>(userUrl, {headers}).pipe(
      map((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem('refreshToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${refreshToken}`
    });

    return this.http.post<any>(refreshUrl, {}, { headers }).pipe(
      map(response => {
        if (response && response.accessToken) {
          localStorage.setItem('accessToken', response.accessToken);
          localStorage.setItem('refreshToken', response.refreshToken);
        }
        return response;
      }),
      catchError(err => {
        this.logout();
        return throwError(err);
      })
    );
  }

  logout() {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }
}
