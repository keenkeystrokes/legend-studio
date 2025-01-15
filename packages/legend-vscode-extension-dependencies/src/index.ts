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

import '../src/index.css'; // eslint-disable-line @finos/legend/no-cross-workspace-source-usage
// NOTE: tailwind style takes precedence over other styles since it's generated and we should not allow
// other styles to override it
import '../lib/tailwind.css'; // eslint-disable-line @finos/legend/no-cross-workspace-non-export-usage

export {
  type Diagram,
  DIAGRAM_ALIGNER_OPERATOR,
  DIAGRAM_INTERACTION_MODE,
  DIAGRAM_RELATIONSHIP_EDIT_MODE,
  DIAGRAM_ZOOM_LEVELS,
  DiagramRenderer,
  DSL_Diagram_GraphManagerPreset,
  getDiagram,
  Point,
  V1_diagramModelSchema,
  V1_transformDiagram,
} from '@finos/legend-extension-dsl-diagram';

export {
  AlignBottomIcon,
  AlignCenterIcon,
  AlignEndIcon,
  AlignMiddleIcon,
  AlignStartIcon,
  AlignTopIcon,
  BoxArrowUpRightIcon,
  Button,
  CaretDownIcon,
  clsx,
  compareLabelFn,
  ControlledDropdownMenu,
  CubesLoadingIndicator,
  CubesLoadingIndicatorIcon,
  CustomSelectorInput,
  DistributeHorizontalIcon,
  DistributeVerticalIcon,
  LegendStyleProvider,
  MenuContent,
  MenuContentDivider,
  MenuContentItem,
  MousePointerIcon,
  MoveIcon,
  SaveCurrIcon,
  SaveIcon,
  useResizeDetector,
  ZoomInIcon,
  ZoomOutIcon,
} from '@finos/legend-art';

export {
  type ClassifierPathMapping,
  type ExecutionOptions,
  type GraphManagerOperationReport,
  type GraphManagerPluginManager,
  type PureGraphManagerPlugin,
  type PureGraphPlugin,
  type PureModel,
  type PureProtocolProcessorPlugin,
  type RawRelationalOperationElement,
  type SubtypeInfo,
  type TEMPORARY__EngineSetupConfig,
  type V1_CompilationResult,
  type V1_GrammarParserBatchInputEntry,
  type V1_GraphManagerEngine,
  type V1_LambdaReturnTypeResult,
  type V1_RawRelationalOperationElement,
  type V1_TextCompilationResult,
  buildPureGraphManager,
  Class,
  CodeCompletionResult,
  Completion,
  ConcreteFunctionDefinition,
  Core_GraphManagerPreset,
  CORE_PURE_PATH,
  DeploymentResult,
  EXECUTION_SERIALIZATION_FORMAT,
  ExternalFormatDescription,
  GenerationConfigurationDescription,
  GenerationMode,
  getFunctionName,
  getFunctionNameWithPath,
  getFunctionSignature,
  GraphManagerState,
  LightPersistentDataCubeQuery,
  PackageableElementExplicitReference,
  PersistentDataCubeQuery,
  PostValidationAssertionResult,
  PureExecution,
  RawLambda,
  RawVariableExpression,
  RelationalExecutionActivities,
  RelationTypeColumnMetadata,
  RelationTypeMetadata,
  resolvePackagePathAndElementName,
  Service,
  ServiceExecution,
  ServiceExecutionMode,
  SUPPORTED_FUNCTIONS,
  TDSExecutionResult,
  TEMPORARY__AbstractEngineConfig,
  V1_AppliedFunction,
  V1_ArtifactGenerationExtensionInput,
  V1_ArtifactGenerationExtensionOutput,
  V1_buildCompilationError,
  V1_buildExecutionError,
  V1_buildExecutionResult,
  V1_buildParserError,
  V1_buildVariable,
  V1_CheckEntitlementsResult,
  V1_checkEntitlementsResultModelSchema,
  V1_CompilationError,
  V1_CompilationWarning,
  V1_CompleteCodeInput,
  V1_ConcreteFunctionDefinition,
  V1_DatabaseBuilderInput,
  V1_DatabaseToModelGenerationInput,
  V1_DatasetEntitlementReport,
  V1_DatasetSpecification,
  V1_DebugTestsResult,
  V1_DELEGATED_EXPORT_HEADER,
  V1_deserializeDatasetEntitlementReport,
  V1_deserializeDatasetSpecification,
  V1_deserializeExecutionResult,
  V1_deserializePackageableElement,
  V1_deserializeRawValueSpecification,
  V1_deserializeValueSpecification,
  V1_EngineRuntime,
  V1_EntitlementReportAnalyticsInput,
  V1_ExecuteInput,
  V1_EXECUTION_RESULT,
  V1_ExecutionError,
  V1_ExecutionPlan,
  V1_ExecutionResult,
  V1_ExternalFormatModelGenerationInput,
  V1_FunctionActivatorInfo,
  V1_FunctionActivatorInput,
  V1_GenerateSchemaInput,
  V1_GenerationOutput,
  V1_GenericType,
  V1_getFunctionNameWithoutSignature,
  V1_getGenericTypeFullPath,
  V1_GraphBuilderContextBuilder,
  V1_GraphTransformerContextBuilder,
  V1_KeyedExecutionParameter,
  V1_Lambda,
  V1_LambdaReturnTypeInput,
  V1_LightQuery,
  V1_MappedEntity,
  V1_Mapping,
  V1_MappingModelCoverageAnalysisInput,
  V1_MappingModelCoverageAnalysisResult,
  V1_Multiplicity,
  V1_PackageableElement,
  V1_PackageableElementPtr,
  V1_PackageableRuntime,
  V1_PackageableType,
  V1_ParameterValue,
  V1_parameterValueModelSchema,
  V1_ParserError,
  V1_PureExecution,
  V1_PureGraphManager,
  V1_PureModelContext,
  V1_PureModelContextData,
  V1_PureMultiExecution,
  V1_PureSingleExecution,
  V1_Query,
  V1_QuerySearchSpecification,
  V1_rawBaseExecutionContextModelSchema,
  V1_RawExecutionContext,
  V1_RawLambda,
  V1_rawLambdaModelSchema,
  V1_RawSQLExecuteInput,
  V1_RawVariable,
  V1_RelationalConnectionBuilder,
  V1_RelationalExecutionActivities,
  V1_RelationType,
  V1_RelationTypeColumn,
  V1_relationTypeModelSchema,
  V1_RenderStyle,
  V1_RunTestsInput,
  V1_RunTestsResult,
  V1_Runtime,
  V1_RuntimePointer,
  V1_serializeDatasetSpecification,
  V1_serializePackageableElement,
  V1_serializeRawValueSpecification,
  V1_serializeRuntime,
  V1_serializeValueSpecification,
  V1_Service,
  V1_ServiceConfigurationInfo,
  V1_serviceModelSchema,
  V1_ServiceRegistrationResult,
  V1_ServiceStorage,
  V1_setupDatabaseSerialization,
  V1_setupEngineRuntimeSerialization,
  V1_setupLegacyRuntimeSerialization,
  V1_SourceInformation,
  V1_StoreEntitlementAnalysisInput,
  V1_TDSExecutionResult,
  V1_TestDataGenerationExecutionInput,
  V1_TestDataGenerationExecutionWithSeedInput,
  V1_TestDataGenerationInput,
  V1_TestDataGenerationResult,
  V1_transformRawLambda,
  V1_ValueSpecification,
  V1_ZIPKIN_TRACE_HEADER,
} from '@finos/legend-graph';

export type { Entity } from '@finos/legend-storage';

export {
  type ExtensionsConfigurationData,
  type GeneratorFn,
  type Parameters,
  type PlainObject,
  type RequestHeaders,
  type RequestProcessConfig,
  type ResponseProcessConfig,
  type TraceData,
  AbstractPlugin,
  AbstractPreset,
  assertErrorThrown,
  assertNonNullable,
  assertTrue,
  ContentType,
  customListWithSchema,
  deserializeMap,
  getContentTypeFileExtension,
  guaranteeNonEmptyString,
  guaranteeNonNullable,
  guaranteeType,
  isBoolean,
  isLossSafeNumber,
  isNonNullable,
  isNullable,
  LogEvent,
  NetworkClientError,
  parseLosslessJSON,
  returnUndefOnError,
  SerializationFactory,
  serializeMap,
  TracerService,
  uniq,
  usingModelSchema,
  uuid,
} from '@finos/legend-shared';

export {
  type LegendApplicationConfigurationData,
  type LegendApplicationConfigurationInput,
  ApplicationFrameworkProvider,
  ApplicationStore,
  ApplicationStoreProvider,
  BrowserEnvironmentProvider,
  Core_LegendApplicationPlugin,
  LegendApplicationConfig,
  LegendApplicationPlugin,
  LegendApplicationPluginManager,
  useApplicationStore,
} from '@finos/legend-application';

export {
  type FetchStructureLayoutConfig,
  type QueryBuilderHeaderActionConfiguration,
  FunctionQueryBuilderState,
  QueryBuilder_GraphManagerPreset,
  QueryBuilder_LegendApplicationPlugin,
  QueryBuilder,
  QueryBuilderActionConfig,
  QueryBuilderConfig,
  QueryBuilderState,
  QueryBuilderWorkflowState,
  ServiceQueryBuilderState,
} from '@finos/legend-query-builder';

export {
  graph_renameElement,
  pureExecution_setFunction,
  service_setExecution,
} from '@finos/legend-application-studio';

export {
  type CompletionItem,
  type DataCubeAPI,
  type DataCubeConfiguration,
  type DataCubeExecutionResult,
  type DataCubeInnerHeaderComponentParams,
  type DataCubeOptions,
  type DataCubeRelationType,
  _elementPtr,
  _function,
  _functionName,
  _lambda,
  DataCube,
  DataCubeEngine,
  DataCubeFunction,
  DataCubeQuery,
  DataCubeSource,
} from '@finos/legend-data-cube';
