/**
 * A common interface that with `id` and `name` from which 
 * many other interfaces extend from
 */
export interface INamedObject {

    /**
     * The unique Identity of the object
     */
    id: string;

    /**
     * The Name/Title of the object
     */
    name: string;
}