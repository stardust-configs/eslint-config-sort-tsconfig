module.exports = {
  extends: ['plugin:jsonc/base', 'plugin:jsonc/prettier'],
  overrides: [
    {
      files: ['tsconfig.json', 'tsconfig.*.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-array-values': [
          'warn',
          {
            pathPattern: '.*',
            order: {
              type: 'asc',
            },
          },
        ],
        /**
         * Sort on based the TSConfig Reference
         *
         * @see https://www.typescriptlang.org/tsconfig
         */
        'jsonc/sort-keys': [
          'warn',
          {
            pathPattern: '^$',
            order: [
              'extends',
              'compilerOptions',
              'watchOptions',
              'typeAcquisition',
              'files',
              'include',
              'exclude',
              'references',
              {
                order: {
                  type: 'asc',
                },
              },
            ],
          },
          {
            pathPattern: '^compilerOptions$',
            order: [
              // Type Checking
              'allowUnreachableCode',
              'allowUnusedLabels',
              'alwaysStrict',
              'exactOptionalPropertyTypes',
              'noFallthroughCasesInSwitch',
              'noImplicitAny',
              'noImplicitOverride',
              'noImplicitReturns',
              'noImplicitThis',
              'noPropertyAccessFromIndexSignature',
              'noUncheckedIndexedAccess',
              'noUnusedLocals',
              'noUnusedParameters',
              'strict',
              'strictBindCallApply',
              'strictFunctionTypes',
              'strictNullChecks',
              'strictPropertyInitialization',
              'useUnknownInCatchVariables',
              // Modules
              'allowUmdGlobalAccess',
              'baseUrl',
              'module',
              'moduleResolution',
              'moduleSuffixes',
              'noResolve',
              'paths',
              'resolveJsonModule',
              'rootDir',
              'rootDirs',
              'typeRoots',
              'types',
              // Emit
              'declaration',
              'declarationDir',
              'declarationMap',
              'downlevelIteration',
              'emitBOM',
              'emitDeclarationOnly',
              'importHelpers',
              'importsNotUsedAsValues',
              'inlineSourceMap',
              'inlineSources',
              'mapRoot',
              'newLine',
              'noEmit',
              'noEmitHelpers',
              'noEmitOnError',
              'outDir',
              'outFile',
              'preserveConstEnums',
              'preserveValueImports',
              'removeComments',
              'sourceMap',
              'sourceRoot',
              'stripInternal',
              // JavaScript Support
              'allowJs',
              'checkJs',
              'maxNodeModuleJsDepth',
              // Editor Support
              'disableSizeLimit',
              'plugins',
              // Interop Constraints
              'allowSyntheticDefaultImports',
              'esModuleInterop',
              'forceConsistentCasingInFileNames',
              'isolatedModules',
              'preserveSymlinks',
              // Backwards Compatibility
              'charset',
              'keyofStringsOnly',
              'noImplicitUseStrict',
              'noStrictGenericChecks',
              'out',
              'suppressExcessPropertyErrors',
              'suppressImplicitAnyIndexErrors',
              // Language and Environment
              'emitDecoratorMetadata',
              'experimentalDecorators',
              'jsx',
              'jsxFactory',
              'jsxFragmentFactory',
              'jsxImportSource',
              'lib',
              'moduleDetection',
              'noLib',
              'reactNamespace',
              'target',
              'useDefineForClassFields',
              // Compiler Diagnostics
              'diagnostics',
              'explainFiles',
              'extendedDiagnostics',
              'generateCpuProfile',
              'listEmittedFiles',
              'listFiles',
              'traceResolution',
              // Projects
              'composite',
              'disableReferencedProjectLoad',
              'disableSolutionSearching',
              'disableSourceOfProjectReferenceRedirect',
              'incremental',
              'tsBuildInfoFile',
              // Output Formatting
              'noErrorTruncation',
              'preserveWatchOutput',
              'pretty',
              // Completeness
              'skipDefaultLibCheck',
              'skipLibCheck',
              // Watch Options
              'assumeChangesOnlyAffectDirectDependencies',
            ],
          },
          {
            pathPattern: '^watchOptions$',
            order: [
              'watchFile',
              'watchDirectory',
              'fallbackPolling',
              'synchronousWatchDirectory',
              'excludeDirectories',
              'excludeFiles',
            ],
          },
          {
            pathPattern: '^typeAcquisition$',
            order: ['enable', 'include', 'exclude', 'disableFilenameBasedTypeAcquisition'],
          },
          {
            pathPattern: '.*',
            order: {
              type: 'asc',
            },
          },
        ],
      },
    },
  ],
}
