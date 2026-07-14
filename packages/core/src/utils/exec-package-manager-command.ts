import {
  detectPackageManager,
  getPackageManagerCommand as nxGetPackageManagerCommand
} from '@nx/devkit'

import { buildCommand } from './build-command'
import { execCommand, Options } from './exec'

export function getPackageManagerDlxCommand() {
  return process.env.NX_EXTEND_COMMAND_USE_NPX ? 'npx' : nxGetPackageManagerCommand(detectPackageManager()).dlx
}

export function execPackageManagerCommand(command: string, options?: Options) {
  return execCommand(buildCommand([
    getPackageManagerDlxCommand(),
    command
  ]), options)
}
