import { FC } from "react";
interface DraggerProps {
    onFile: (files: FileList) => void;
    accept?: string;
}
export declare const Dragger: FC<DraggerProps>;
export default Dragger;
