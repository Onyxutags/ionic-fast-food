import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IdeasService } from '../core/services/ideas.service';

@Component({
  selector: 'app-create-idea',
  templateUrl: './create-idea.page.html',
  styleUrls: ['./create-idea.page.scss'],
})
export class CreateIdeaPage {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ideasService: IdeasService,
    private router: Router
  ) {
    this.form = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(999),
        ],
      ],
    });
  }

  get titleLength() {
    return this.form.value.title.length;
  }

  get descriptionLength() {
    return this.form.value.description.length;
  }

  onSubmit() {
    if (this.form.valid) {
      const { title, description } = this.form.value;
      const newIdea = this.ideasService.create({ title, description });

      if (newIdea) {
        console.log('Idea creada!', newIdea);
        this.router.navigate(['/']);
      }
    } else {
      console.log('hay problemas con el formulario');
    }
  }
}