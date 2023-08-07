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
 * DashboardApi - axios parameter creator
 * @export
 */
export const DashboardApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get User Dashboard Data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserDashboardData: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/dashboard`;
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
    }
};

/**
 * DashboardApi - functional programming interface
 * @export
 */
export const DashboardApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DashboardApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get User Dashboard Data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserDashboardData(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Dashboard>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserDashboardData(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DashboardApi - factory interface
 * @export
 */
export const DashboardApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DashboardApiFp(configuration)
    return {
        /**
         * 
         * @summary Get User Dashboard Data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserDashboardData(options?: any): AxiosPromise<Dashboard> {
            return localVarFp.getUserDashboardData(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DashboardApi - object-oriented interface
 * @export
 * @class DashboardApi
 * @extends {BaseAPI}
 */
export class DashboardApi extends BaseAPI {
    /**
     * 
     * @summary Get User Dashboard Data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DashboardApi
     */
    public getUserDashboardData(options?: AxiosRequestConfig) {
        return DashboardApiFp(this.configuration).getUserDashboardData(options).then((request) => request(this.axios, this.basePath));
    }
}
