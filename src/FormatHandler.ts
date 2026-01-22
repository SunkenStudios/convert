export interface FileFormat {
  name: string;
  format: string;
  extension: string;
  mime: string;
  from: boolean;
  to: boolean;
  internal: string;
}

export interface FileData {
  name: string;
  readonly bytes: Uint8Array;
}

export interface FormatHandler {
  name: string;
  supportedFormats?: FileFormat[];
  ready: boolean;
  init: () => Promise<void>;
  doConvert: (
    inputFiles: FileData[],
    inputFormat: FileFormat,
    outputFormat: FileFormat,
    args?: string[]
  ) => Promise<FileData[]>;
}

export class ConvertPathNode {
  public handler: FormatHandler;
  public format: FileFormat;
  constructor (handler: FormatHandler, format: FileFormat) {
    this.handler = handler;
    this.format = format;
  }
}
