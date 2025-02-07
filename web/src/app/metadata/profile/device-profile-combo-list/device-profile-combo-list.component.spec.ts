/*******************************************************************************
 * Copyright © 2022-2023 VMware, Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 * 
 * @author: Huaqiao Zhang, <huaqiaoz@vmware.com>
 *******************************************************************************/

import { NO_ERRORS_SCHEMA} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { DeviceProfileComboListComponent } from './device-profile-combo-list.component';
import { DeviceProfile } from '../../../contracts/v2/device-profile';

describe('DeviceProfileComboListComponent: unit test', () => {
  let fixture: ComponentFixture<DeviceProfileComboListComponent>;
  let component: DeviceProfileComboListComponent;

  const selectedProfiles = ["simple-profile-1     ","   simple-profile-2"]
  const singleProfileSelected = 'simple-profile-name'
  const singleProfileSelectedObjectExpected = {name: 'simple-profile-name'} as DeviceProfile

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ DeviceProfileComboListComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceProfileComboListComponent);
    component = fixture.componentInstance;
    component.selectedProfiles = selectedProfiles
    fixture.detectChanges();
  });

  it('renders without errors', () => {
    expect(component).toBeTruthy();
  });

  it('sets the value of selectedProfilesStr correctly', () => {
    expect(component.selectedProfilesStr).toEqual(selectedProfiles.toString());
  });

  it('sets singleProfileSelectedObject correctly', () => {
    component.singleProfileSelected = singleProfileSelected
    expect(component.singleProfileSelectedObject).toEqual(singleProfileSelectedObjectExpected);
  });
});
