/**
 * A module providing a way to run a command on tsx watch
 *
 * @link https://github.com/privatenumber/tsx/issues/521
 * @module
 */

/**
 * Run a command on tsx watch
 *
 * @param cmd - The command to run
 */
export function tsxWatch(cmd: string) {
    // TODO: Implement tsx-watch cli with --on-change option for running a command on file change
    console.log(`Re-run command on tsx watch: ${cmd}`);
}
