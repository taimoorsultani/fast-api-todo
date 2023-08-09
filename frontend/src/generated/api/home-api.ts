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
import { Dashboard } from '../models';
/**
 * HomeApi - axios parameter creator
 * @export
 */
export const HomeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Home Stats
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHomeStats: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/home`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HomeApi - functional programming interface
 * @export
 */
export const HomeApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = HomeApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Home Stats
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHomeStats(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Dashboard>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHomeStats(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * HomeApi - factory interface
 * @export
 */
export const HomeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = HomeApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Home Stats
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHomeStats(options?: any): AxiosPromise<Dashboard> {
            return localVarFp.getHomeStats(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HomeApi - object-oriented interface
 * @export
 * @class HomeApi
 * @extends {BaseAPI}
 */
export class HomeApi extends BaseAPI {
    /**
     * 
     * @summary Get Home Stats
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HomeApi
     */
    public getHomeStats(options?: AxiosRequestConfig) {
        return HomeApiFp(this.configuration).getHomeStats(options).then((request) => request(this.axios, this.basePath));
    }
}