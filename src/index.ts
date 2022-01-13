import { create as createHtmlLogger } from "./HtmlLogger";

type LogFunction = (stepName: string | string[], stepState: string | object, channel?: string) => void | (() => void);

/**
 * Creates a new Logger with the specified outputPath where the resulting html file will be written.
 */
export function create(outputPath: string): LogFunction {
    return createHtmlLogger(outputPath);
}
