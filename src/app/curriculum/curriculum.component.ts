import { Component } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

const STYLES = ({
  drawerContainer: {
    height: '100%',
    transform: 'translate3d(0,0,0)',
    
  },
  drawer: {
    padding: '0',
    borderRight: "1px solid #ccc",

  },
  drawerContent: {
    padding: '0 2em',
    height: '100%',
    backgroundColor: '#f8f9fa',
    overflow: 'auto',
  },
  icon: {
    margin: '0 8px'
  },
  sidenavTitle: {
    padding: '0 16px !important',
    height: "60px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #ccc",
  }
});
const DEFAULT = '200px over@XSmall';
const MINI = '56px over@XSmall';

@Component({
  selector: 'curriculum-component',
  templateUrl: './curriculum.component.html'
})
export class CurriculumComponent {
  readonly classes = this._theme.addStyleSheet(STYLES);
  mini = false;

  get width() {
    return this.mini ? MINI : DEFAULT;
  }

  curriculumMenu = [
    {name: 'Mark entity', linkTo: '/mark-entity'},
    {name: 'Rule setup', linkTo: 'rule-setup'},
    {name: 'Component configuration', linkTo: 'component-configuration'},
    {name: 'Copy template', linkTo: '/copy-template'},
    {name: 'View report card', linkTo: '/view-report'},
    {name: 'Marks card', linkTo: '/marks-card'},
    {name: 'Add report card term', linkTo: '/add-report'},
    {name: 'Subject card entry status', linkTo: '/subject-card-status'},
    {name: 'External exam upload', linkTo: '/external-exam-upload'},
  ]

  constructor(private _theme: LyTheme2) { }

  toggleMini() {
    this.mini = !this.mini;
  }
}
