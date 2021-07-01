/*
 * @Descripttion: 
 * @version: 
 * @Author: windowdotonload
 */
/*
 * @Descripttion:
 * @version:
 * @Author: windowdotonload
 */


export interface userProps {
    isLogin: boolean;
    name?: string;
    id?: number;
};

export interface columnProps {
    id: number;
    title: string;
    avatar?: string;
    description: string;
};

export interface ruleProp {
    type: 'required' | 'email'
    message: string
};


