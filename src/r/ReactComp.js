import React from 'react';
import {SK} from 'sk-js';
import Comp from '../Comp';

export default class ReactComp extends Comp {
  static SK_COMP_NAME = 'ReactComp';
  static defaultProps = SK.extends(true, {}, Comp.defaultProps, {});
  static propTypes = SK.extends(true, {}, Comp.propTypes, {});

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = ReactComp.SK_COMP_NAME;
  }

  render() {
    const {ksCompTag: KsCompTag} = this.props;

    return (
      <KsCompTag {...this.transProps2Self(KsCompTag)}>
        {this.transProps2Child()}
      </KsCompTag>
    );
  }
}
