import { FC } from "react";
export declare type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';
export interface UploadFile {
    uid: string;
    size: number;
    name: string;
    status?: UploadFileStatus;
    percent?: number;
    raw?: File;
    response?: any;
    error?: any;
}
export interface UploadProps {
    /** 文件上传地址 */
    action: string;
    defaultFileList?: UploadFile[];
    /** 上传文件之前回调，修改文件属性或者返回boolean是否上传文件。 */
    beforeUpload?: (file: File) => boolean | Promise<File>;
    /**上传文件进度 */
    onProgress?: (percentage: number, file: UploadFile) => void;
    /**上传文件成功回调 */
    onSuccess?: (data: any, file: File) => void;
    /**上传文件失败回调 */
    onError?: (err: any, file: File) => void;
    /**file修改回调 */
    onChange?: (file: File) => void;
    /**删除回调 */
    onRemove?: (file: UploadFile) => void;
    /**添加自定义header */
    headers?: {
        [key: string]: any;
    };
    /** 上传文件名 */
    name?: string;
    /**添加自定义post fromData */
    data?: {
        [key: string]: any;
    };
    /** 是否携带cookie */
    withCredentials?: boolean;
    /**添加文件类型约束 */
    accept?: string;
    /**文件多选 */
    multiple?: boolean;
    /**是否开启拖动上传 */
    drag?: boolean;
}
/**
 * Upload 文件上传
 * ~~~js
 * // 这样引用
 * import { Upload } from 'setsailship'
 * ~~~
 */
export declare const Upload: FC<UploadProps>;
export default Upload;
