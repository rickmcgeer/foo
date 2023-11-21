import { ShadowObject, ViewModel, component, part } from 'lively.morphic';
import { pt, rect } from 'lively.graphics/geometry-2d.js';
import { Color } from 'lively.graphics/color.js';
import { Text } from 'lively.morphic/text/morph.js';
import { DarkNumberWidget, DefaultNumberWidget } from 'lively.ide/value-widgets.cp.js';
'format esm';

export class RevenueModel extends ViewModel {
  get bindings () {
    return [
      { target: 'year 1 revenue', signal: 'number', handler: 'revChange' }
    ];
  }

  revChange (val) {
    window.alert('Revenue change!');
    this.revenue = val;
  }
}
const RevnueEntry = component({
  borderColor: Color.rgb(23, 160, 251),
  borderWidth: 1,
  extent: pt(675.0000, 61.0000),
  position: pt(557.0000, 139.0000),
  viewModelClass: RevenueModel,
  submorphs: [{
    type: Text,
    name: 'aText',
    borderColor: Color.rgb(23, 160, 251),
    cursorWidth: 1.5,
    dynamicCursorColoring: true,
    extent: pt(235.0000, 51.0000),
    fill: Color.white,
    fixedHeight: true,
    fixedWidth: true,
    fontFamily: 'Roboto',
    fontSize: 27,
    lineWrapping: 'by-words',
    padding: rect(1, 1, 0, 0),
    position: pt(1.0000, 4.0000),
    textAndAttributes: ['Revenue Year 1', null]
  }, part(DarkNumberWidget, {
    name: 'year 1 revenue',
    dropShadow: new ShadowObject({ color: Color.rgba(0, 0, 0, 0.6), blur: 40, fast: false }),
    position: pt(251.8000, 17.1000),
    submorphs: [{
      name: 'value',
      nativeCursor: 'text',
      readOnly: false
    }]
  }), {
    type: Text,
    name: 'aText1',
    borderColor: Color.rgb(23, 160, 251),
    borderWidth: 1,
    cursorWidth: 1.5,
    dynamicCursorColoring: true,
    extent: pt(235.0000, 51.0000),
    fill: Color.white,
    fixedHeight: true,
    fixedWidth: true,
    fontFamily: 'Roboto',
    fontSize: 27,
    lineWrapping: 'by-words',
    padding: rect(1, 1, 0, 0),
    position: pt(335.0000, 7.0000),
    textAndAttributes: ['Growth Rate', null]
  }, part(DarkNumberWidget, {
    name: 'growth rate',
    master: DefaultNumberWidget,
    dropShadow: new ShadowObject({ color: Color.rgba(0, 0, 0, 0.6), blur: 40, fast: false }),
    position: pt(587.8000, 19.1000),
    submorphs: [{
      name: 'value',
      nativeCursor: 'text',
      readOnly: false
    }]
  })]
});

export { RevnueEntry };
