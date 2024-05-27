import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {FOOTER_TAGS, FOOTER_LINKS} from '../../shared/constants/footer.constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerLinks = FOOTER_LINKS;
  tags = FOOTER_TAGS;
}
