/*
 *  Copyright 2018 TWO SIGMA OPEN SOURCE, LLC
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import { expect } from 'chai';
import { Menu } from '@phosphor/widgets';
import BkoMenu from '@beakerx/tableDisplay/dataGrid/headerMenu/BkoMenu';
import {CommandRegistry} from '@phosphor/commands';

describe('BkoMenu', () => {
  let bkoMenu;

  before(() => {
    bkoMenu = new BkoMenu({ commands: new CommandRegistry() });
  });

  after(() => {
    bkoMenu.dispose();
  });

  it('should be an instance of Menu', () => {
    expect(bkoMenu).to.be.an.instanceof(Menu);
  });

  it('should implement the triggerActiveItem method', () => {
    expect(bkoMenu).to.have.property('triggerActiveItem');
    expect(bkoMenu.triggerActiveItem).to.be.a('Function');
  });

  it('should implement the close method', () => {
    expect(bkoMenu).to.have.property('close');
    expect(bkoMenu.close).to.be.a('Function');
  });

  it('should implement the onBeforeAttach method', () => {
    expect(bkoMenu).to.have.property('onBeforeAttach');
    expect(bkoMenu.onBeforeAttach).to.be.a('Function');
  });

  it('should implement the onActivateRequest method', () => {
    expect(bkoMenu).to.have.property('onActivateRequest');
    expect(bkoMenu.onActivateRequest).to.be.a('Function');
  });

});