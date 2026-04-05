import { colors, consola } from '@mamba/node-utils';

import { cac } from 'cac';

import { version } from '../package.json';
import { defineCheckCircularCommand } from './check-circular';
import { defineDepcheckCommand } from './check-dep';
import { defineCodeWorkspaceCommand } from './code-workspace';
import { defineLintCommand } from './lint';
import { definePubLintCommand } from './publint';

// 命令描述
const COMMAND_DESCRIPTIONS = {
  'check-circular': 'Check for circular dependencies',
  'check-dep': 'Check for unused dependencies',
  'code-workspace': 'Manage VS Code workspace settings',
  lint: 'Run linting on the project',
  publint: 'Check package.json files for publishing standards',
} as const;

/**
 * Initialize and run the CLI
 */
async function main(): Promise<void> {
  try {
    const msh = cac('msh');

    // Register commands
    defineLintCommand(msh);
    definePubLintCommand(msh);
    defineCodeWorkspaceCommand(msh);
    defineCheckCircularCommand(msh);
    defineDepcheckCommand(msh);

    // Set up CLI
    msh.usage('msh <command> [options]');
    msh.help();
    msh.version(version);

    // Parse arguments without auto-running to detect unknown commands
    // Note: cac v7 removed EventEmitter; use matchedCommand after parse instead
    msh.parse(undefined, { run: false });

    if (!msh.matchedCommand && msh.args.length > 0) {
      const unknownCmd = String(msh.args[0]);
      consola.error(
        colors.red(`Invalid command: ${unknownCmd}`),
        '\n',
        colors.yellow('Available commands:'),
        '\n',
        Object.entries(COMMAND_DESCRIPTIONS)
          .map(([name, desc]) => `  ${colors.cyan(name)} - ${desc}`)
          .join('\n'),
      );
      process.exit(1);
    }

    await msh.runMatchedCommand();
  } catch (error) {
    consola.error(
      colors.red('An unexpected error occurred:'),
      '\n',
      error instanceof Error ? error.message : error,
    );
    process.exit(1);
  }
}

// Run the CLI
main().catch((error) => {
  consola.error(
    colors.red('Failed to start CLI:'),
    '\n',
    error instanceof Error ? error.message : error,
  );
  process.exit(1);
});
