/* tslint:disable */
/* eslint-disable */
/**
 * fastapi-assesment
 * fastapi-assesment API
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { HTTPValidationError } from '../models';
// @ts-ignore
import { Todo } from '../models';
// @ts-ignore
import { TodoCreate } from '../models';
// @ts-ignore
import { TodoUpdate } from '../models';
/**
 * TodosApi - axios parameter creator
 * @export
 */
export const TodosApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Todo
         * @param {TodoCreate} todoCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTodo: async (todoCreate: TodoCreate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoCreate' is not null or undefined
            assertParamExists('createTodo', 'todoCreate', todoCreate)
            const localVarPath = `/api/v1/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(todoCreate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete Todo
         * @param {number} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTodo: async (todoId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('deleteTodo', 'todoId', todoId)
            const localVarPath = `/api/v1/todos/{todo_id}`
                .replace(`{${"todo_id"}}`, encodeURIComponent(String(todoId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Todo
         * @param {number} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodo: async (todoId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('getTodo', 'todoId', todoId)
            const localVarPath = `/api/v1/todos/{todo_id}`
                .replace(`{${"todo_id"}}`, encodeURIComponent(String(todoId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Todos
         * @param {string} [sort] Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
         * @param {string} [range] Format: &#x60;[start, end]&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodos: async (sort?: string, range?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/todos`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (range !== undefined) {
                localVarQueryParameter['range'] = range;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update Todo
         * @param {number} todoId 
         * @param {TodoUpdate} todoUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTodo: async (todoId: number, todoUpdate: TodoUpdate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'todoId' is not null or undefined
            assertParamExists('updateTodo', 'todoId', todoId)
            // verify required parameter 'todoUpdate' is not null or undefined
            assertParamExists('updateTodo', 'todoUpdate', todoUpdate)
            const localVarPath = `/api/v1/todos/{todo_id}`
                .replace(`{${"todo_id"}}`, encodeURIComponent(String(todoId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2PasswordBearer required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2PasswordBearer", [], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(todoUpdate, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TodosApi - functional programming interface
 * @export
 */
export const TodosApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TodosApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Todo
         * @param {TodoCreate} todoCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTodo(todoCreate: TodoCreate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTodo(todoCreate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete Todo
         * @param {number} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteTodo(todoId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteTodo(todoId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Todo
         * @param {number} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTodo(todoId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTodo(todoId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Todos
         * @param {string} [sort] Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
         * @param {string} [range] Format: &#x60;[start, end]&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTodos(sort?: string, range?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<Todo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTodos(sort, range, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Todo
         * @param {number} todoId 
         * @param {TodoUpdate} todoUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTodo(todoId: number, todoUpdate: TodoUpdate, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Todo>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTodo(todoId, todoUpdate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TodosApi - factory interface
 * @export
 */
export const TodosApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TodosApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Todo
         * @param {TodoCreate} todoCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTodo(todoCreate: TodoCreate, options?: any): AxiosPromise<Todo> {
            return localVarFp.createTodo(todoCreate, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Todo
         * @param {number} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteTodo(todoId: number, options?: any): AxiosPromise<any> {
            return localVarFp.deleteTodo(todoId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Todo
         * @param {number} todoId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodo(todoId: number, options?: any): AxiosPromise<Todo> {
            return localVarFp.getTodo(todoId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Todos
         * @param {string} [sort] Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
         * @param {string} [range] Format: &#x60;[start, end]&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTodos(sort?: string, range?: string, options?: any): AxiosPromise<Array<Todo>> {
            return localVarFp.getTodos(sort, range, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Todo
         * @param {number} todoId 
         * @param {TodoUpdate} todoUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTodo(todoId: number, todoUpdate: TodoUpdate, options?: any): AxiosPromise<Todo> {
            return localVarFp.updateTodo(todoId, todoUpdate, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createTodo operation in TodosApi.
 * @export
 * @interface TodosApiCreateTodoRequest
 */
export interface TodosApiCreateTodoRequest {
    /**
     * 
     * @type {TodoCreate}
     * @memberof TodosApiCreateTodo
     */
    readonly todoCreate: TodoCreate
}

/**
 * Request parameters for deleteTodo operation in TodosApi.
 * @export
 * @interface TodosApiDeleteTodoRequest
 */
export interface TodosApiDeleteTodoRequest {
    /**
     * 
     * @type {number}
     * @memberof TodosApiDeleteTodo
     */
    readonly todoId: number
}

/**
 * Request parameters for getTodo operation in TodosApi.
 * @export
 * @interface TodosApiGetTodoRequest
 */
export interface TodosApiGetTodoRequest {
    /**
     * 
     * @type {number}
     * @memberof TodosApiGetTodo
     */
    readonly todoId: number
}

/**
 * Request parameters for getTodos operation in TodosApi.
 * @export
 * @interface TodosApiGetTodosRequest
 */
export interface TodosApiGetTodosRequest {
    /**
     * Format: &#x60;[\&quot;field_name\&quot;, \&quot;direction\&quot;]&#x60;
     * @type {string}
     * @memberof TodosApiGetTodos
     */
    readonly sort?: string

    /**
     * Format: &#x60;[start, end]&#x60;
     * @type {string}
     * @memberof TodosApiGetTodos
     */
    readonly range?: string
}

/**
 * Request parameters for updateTodo operation in TodosApi.
 * @export
 * @interface TodosApiUpdateTodoRequest
 */
export interface TodosApiUpdateTodoRequest {
    /**
     * 
     * @type {number}
     * @memberof TodosApiUpdateTodo
     */
    readonly todoId: number

    /**
     * 
     * @type {TodoUpdate}
     * @memberof TodosApiUpdateTodo
     */
    readonly todoUpdate: TodoUpdate
}

/**
 * TodosApi - object-oriented interface
 * @export
 * @class TodosApi
 * @extends {BaseAPI}
 */
export class TodosApi extends BaseAPI {
    /**
     * 
     * @summary Create Todo
     * @param {TodosApiCreateTodoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodosApi
     */
    public createTodo(requestParameters: TodosApiCreateTodoRequest, options?: AxiosRequestConfig) {
        return TodosApiFp(this.configuration).createTodo(requestParameters.todoCreate, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete Todo
     * @param {TodosApiDeleteTodoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodosApi
     */
    public deleteTodo(requestParameters: TodosApiDeleteTodoRequest, options?: AxiosRequestConfig) {
        return TodosApiFp(this.configuration).deleteTodo(requestParameters.todoId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Todo
     * @param {TodosApiGetTodoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodosApi
     */
    public getTodo(requestParameters: TodosApiGetTodoRequest, options?: AxiosRequestConfig) {
        return TodosApiFp(this.configuration).getTodo(requestParameters.todoId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Todos
     * @param {TodosApiGetTodosRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodosApi
     */
    public getTodos(requestParameters: TodosApiGetTodosRequest = {}, options?: AxiosRequestConfig) {
        return TodosApiFp(this.configuration).getTodos(requestParameters.sort, requestParameters.range, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Todo
     * @param {TodosApiUpdateTodoRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TodosApi
     */
    public updateTodo(requestParameters: TodosApiUpdateTodoRequest, options?: AxiosRequestConfig) {
        return TodosApiFp(this.configuration).updateTodo(requestParameters.todoId, requestParameters.todoUpdate, options).then((request) => request(this.axios, this.basePath));
    }
}
