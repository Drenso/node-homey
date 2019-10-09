export = ZwaveCommandClass;
declare const ZwaveCommandClass_base: any;
/**
 * This class is a representation of a Z-Wave Command Class for a {@link ZwaveNode} in Homey.
 * The class has properties of type Function that are the commands, dependent on the Command Class.
 * For an example see {@link ManagerZwave#getNode}.
 * @hideconstructor
 */
declare class ZwaveCommandClass extends ZwaveCommandClass_base {
    [x: string]: any;
    constructor(opts: any, client: any);
    __client: any;
    version: any;
    /**
     * This event is fired when a battery node changed it's online or offline status.
     * @event ZwaveCommandClass#report
     * @param {Object} command
     * @param {number} command.value - Value of the command
     * @param {string} command.name - Name of the command
     * @param {Object} report - The report object. Contents depend on the Command Class
     */
    _onReport(command: {
        value: number;
        name: string;
    }): void;
}
