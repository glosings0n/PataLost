import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  currentUser = signal<{ displayName: string; email: string; photoURL: string; } | null>(null);

  loginWithGoogle() {
    this.currentUser.set({
      displayName: 'PataLost User',
      email: 'user@example.com',
      photoURL: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6UAVkowkHoM42ugftuPVmP41s1DCMpuHqGmF08pI4xymgZBmJN6hMRBRmiTEagndaIr3TUwdDw90LiJ5QbS9zeaKvuAMtnFhydR__VpjrsmS1Uwst_533rUiQyOG6vssiUzPW6MGjdVmdd9mMfeElD9PXmxdGX_KLeHQyafKj26pC4FSx-QKCnogh-eZ05rZcry7k3-lVGbX8EUKmz2esDD_7jEhpV4fgA7jFBTLz5kRiYfxJ4MHZLsoE8mD_oxLP5Fpl4lcWRto'
    });
  }

  logout() {
    this.currentUser.set(null);
  }
}