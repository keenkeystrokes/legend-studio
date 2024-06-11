/**
 * Copyright (c) 2020-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  WebConsole,
  type AbstractPlugin,
  type AbstractPreset,
} from '@finos/legend-shared';
import { LegendREPL } from './application/LegendREPL.js';
import { Core_LegendREPLApplicationPlugin } from './components/Core_LegendREPLApplicationPlugin.js';

export class LegendREPLWebApplication {
  static getPresetCollection(): AbstractPreset[] {
    return [];
  }

  static getPluginCollection(): AbstractPlugin[] {
    return [new Core_LegendREPLApplicationPlugin(), new WebConsole()];
  }

  static run(baseUrl: string): void {
    LegendREPL.create()
      .setup({ baseAddress: baseUrl })
      .withPresets(LegendREPLWebApplication.getPresetCollection())
      .withPlugins(LegendREPLWebApplication.getPluginCollection())
      .start()
      .catch((e: unknown) => {
        throw e;
      });
  }
}
