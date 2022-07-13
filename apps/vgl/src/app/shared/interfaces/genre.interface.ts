import { INamedObject } from "./named-object.interface";

/**
 * The Genre interface
 * @extends INamedObject
 */
export interface IGenre extends INamedObject {
    
    /**
     * A text description for the genre 
     */
    description: string;
}