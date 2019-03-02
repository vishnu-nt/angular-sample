import { Component } from '@angular/core';
import { LyTheme2 } from '@alyle/ui';

const STYLES = ({
  drawerContainer: {
    height: 'calc(100% - 68px)',
    transform: 'translate3d(0,0,0)',
    overflow: 'auto',
  },
  drawerContent: {
    height: '100%',
  },
  icon: {
    margin: '0 8px'
  },
  logo: {
    color: '#ffffff !important',
    fontWeight: 300,
  },
  brand: {
    fontWeight: 300,
    color: 'white'
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '>div': {
      display: 'flex',
      alignItems: 'center'
    }
  },
  navRight: {
    '*': {
      color: '#d1d1dc !important'
    }
  },
  userInfo: {
    marginLeft: '10px',
    fontSize: '14px',
  },
  linkButton: {
    minHeight: 'auto !important',
    padding: '6px 16px !important'
  },
  drawer: {
    borderRight: '1px solid #ccc' 
  }
});
const DEFAULT = '170px over@XSmall';
const MINI = '56px over@XSmall';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html'
})
export class AppLayoutComponent {
  readonly classes = this._theme.addStyleSheet(STYLES);
  mini = true;

  navItems = [
    {icon: 'school', linkTo: '/school'},
    {icon: 'person', linkTo: '/user'},
    {icon: 'date_range', linkTo: '/curriculum'},
    {icon: 'calendar_view_day', linkTo: '/schedule'},
    {icon: 'delete', linkTo: '/bin'},
    {icon: 'calendar_today', linkTo: '/scheduled'},
    {icon: 'access_time', linkTo: '/time'},
    {icon: 'lens', linkTo: '/school'},
    {icon: 'lens', linkTo: '/school'},
    {icon: 'notes', linkTo: '/notes'},
    {icon: 'toggle_on', linkTo: '/school'},
    {icon: 'speaker_notes', linkTo: '/add-note'},
    {icon: 'toggle_off', linkTo: '/school'},
    {icon: 'view_array', linkTo: '/view'},
    {icon: 'refresh', linkTo: '/update'},
  ]

  get width() {
    return this.mini ? MINI : DEFAULT;
  }

  constructor(private _theme: LyTheme2) { }

  toggleMini() {
    this.mini = !this.mini;
  }
}
