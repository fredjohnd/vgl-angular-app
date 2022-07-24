import { INamedObject } from "./named-object.interface";

/**
 * The Developer interface
 * @extends INamedObject
 */
export interface IDeveloper extends INamedObject {

    /**
     * A text description for the Developer
     */
    description: string;
}
