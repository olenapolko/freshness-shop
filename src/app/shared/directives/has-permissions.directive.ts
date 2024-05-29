import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Permissions} from '../enums/permissions.enum';
import {USER} from '../constants/user.constant';

@Directive({
  selector: '[appHasPermissions]',
  standalone: true
})
export class HasPermissionsDirective {
  private requiredPermissions: Permissions[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input()
  set appHasPermissions(permissions: Permissions[]) {
    this.requiredPermissions = permissions;
    this.updateView();
  }

  private updateView() {
    const userPermissions = USER.permissions;

    if (this.hasPermissions(userPermissions, this.requiredPermissions)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  private hasPermissions(userPermissions: Permissions[], requiredPermissions: Permissions[]): boolean {
    return requiredPermissions.every((permission) => userPermissions.includes(permission));
  }
}
