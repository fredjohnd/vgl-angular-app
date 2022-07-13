import { INamedObject } from "./named-object.interface";

/**
 * The Platform interface
 */
export interface IPlatform extends INamedObject {

    /**
     * The slug aka friendly URL string
     */
    slug: string;
}