/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "ms-rest-js";
import * as msRest from "ms-rest-js";


/**
 * @interface
 * An interface representing MachineDto.
 */
export interface MachineDto {
  /**
   * @member {number} [id]
   */
  id?: number;
  /**
   * @member {string} [name]
   */
  name?: string;
  /**
   * @member {string} [location]
   */
  location?: string;
  /**
   * @member {boolean} [hasDevices]
   */
  hasDevices?: boolean;
}

/**
 * @interface
 * An interface representing MachineDataAPIOptions.
 * @extends ServiceClientOptions
 */
export interface MachineDataAPIOptions extends ServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * @interface
 * An interface representing MachineDataAPIApiMachineServicePutOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface MachineDataAPIApiMachineServicePutOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {MachineDto} [machine]
   */
  machine?: MachineDto;
}

/**
 * @interface
 * An interface representing MachineDataAPIApiMachineServicePostOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface MachineDataAPIApiMachineServicePostOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {MachineDto} [machine]
   */
  machine?: MachineDto;
}

/**
 * Contains response data for the apiMachineServiceGet operation.
 */
export type ApiMachineServiceGetResponse = Array<MachineDto> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: MachineDto[];
    };
};

/**
 * Contains response data for the apiMachineServicePut operation.
 */
export type ApiMachineServicePutResponse = {
  /**
   * The parsed response body.
   */
  body: boolean;
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: boolean;
    };
};

/**
 * Contains response data for the apiMachineServicePost operation.
 */
export type ApiMachineServicePostResponse = {
  /**
   * The parsed response body.
   */
  body: boolean;
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: boolean;
    };
};

/**
 * Contains response data for the apiMachineServiceByIdGet operation.
 */
export type ApiMachineServiceByIdGetResponse = MachineDto & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: MachineDto;
    };
};

/**
 * Contains response data for the apiMachineServiceByIdDelete operation.
 */
export type ApiMachineServiceByIdDeleteResponse = {
  /**
   * The parsed response body.
   */
  body: boolean;
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: boolean;
    };
};

/**
 * Contains response data for the apiMachineServiceByValByValueGet operation.
 */
export type ApiMachineServiceByValByValueGetResponse = Array<MachineDto> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: MachineDto[];
    };
};
