import { PropsWithChildren } from "react";

const Tag = (props:PropsWithChildren<any>) => {
    return (<span className="text-xs my-1 mx-2 text-white  p-1 bg-gray-700 border-gray-900 dark:text-black dark:bg-white dark:border-gray-500 border rounded">{props.children}</span>)
}
export default Tag;