import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ideaTags } from '../idea.interface';
import { IdeasService } from '../core/services/ideas.service';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.page.html',
  styleUrls: ['./ideas.page.scss'],
})
export class IdeasPage {
  ideas$ = this.ideasService.getAll();
  ideaTags = ideaTags;
  user$ = this.authService.user$;

  constructor(
    private router: Router,
    private ideasService: IdeasService,
    private authService: AuthService
  ) {}

  goToCreateIdea() {
    this.router.navigate(['/create']);
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}