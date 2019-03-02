import { Component, ChangeDetectionStrategy } from "@angular/core";
import { LyTheme2, ThemeVariables } from "@alyle/ui";
import { LyDialog, LyDialogRef } from "@alyle/ui/dialog";

const STYLES = (_theme: ThemeVariables) => ({
  cardTitle: {
    margin: 0,
    fontSize: "14px",
    fontWeight: 500
  },
  deleteIcon: {
    height: "28px",
    width: "28px",
    minWidth: "unset"
  },
  noCompTitle: {
    padding: "1em",
    fontWeight: 500
  },
  noCompTemplate: {
    textAlign: "center",
    color: "#e7e7f0"
  },
  card: {
    width: "320px"
  },
  cardContent: {
    padding: "16px 8px !important"
  }
});

@Component({
  selector: "app-component-configuration",
  templateUrl: "./component-configuration.component.html",
  styleUrls: ["./component-configuration.component.scss"]
})
export class ComponentConfigurationComponent {
  readonly classes = this._theme.addStyleSheet(STYLES);

  settings = [
    {
      label: "Year",
      placeholder: "Select item"
    },
    {
      label: "Grade",
      placeholder: "Select grade"
    },
    {
      label: "Name",
      placeholder: "Select section"
    },
    {
      label: "Subject",
      placeholder: "Select subject"
    },
    {
      label: "Term",
      placeholder: "Select term"
    }
  ];

  componentList = [];

  constructor(private _theme: LyTheme2, private _dialog: LyDialog) {}

  addComponent() {
    const lastComponent = this.componentList[this.componentList.length - 1];
    const lastIdx = lastComponent ? lastComponent.idx : 0;
    const newComp = {
      idx: lastIdx + 1,
      name: `Component ${lastIdx + 1}`
    };
    this.componentList.push(newComp);
  }

  removeComponent = (idx: number) => {
    const dialogRef = this._dialog.open<DeleteDialog>(DeleteDialog, {
      width: "unset"
    });
    dialogRef.afterClosed.subscribe((result: boolean) => {
      if (result) {
        const indexToRemove = idx - 1;
        this.componentList.splice(indexToRemove, 1);
      }
    });
  };
}

@Component({
  templateUrl: "./delete-dialog.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeleteDialog {
  constructor(public dialogRef: LyDialogRef) {}
}
