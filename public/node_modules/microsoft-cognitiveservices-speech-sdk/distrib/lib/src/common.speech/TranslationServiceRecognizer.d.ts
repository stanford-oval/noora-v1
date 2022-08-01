import { IAudioSource } from "../common/Exports";
import { CancellationErrorCode, CancellationReason, TranslationRecognizer } from "../sdk/Exports";
import { ServiceRecognizerBase } from "./Exports";
import { IAuthentication } from "./IAuthentication";
import { IConnectionFactory } from "./IConnectionFactory";
import { RecognizerConfig } from "./RecognizerConfig";
import { SpeechConnectionMessage } from "./SpeechConnectionMessage.Internal";
export declare class TranslationServiceRecognizer extends ServiceRecognizerBase {
    private privTranslationRecognizer;
    constructor(authentication: IAuthentication, connectionFactory: IConnectionFactory, audioSource: IAudioSource, recognizerConfig: RecognizerConfig, translationRecognizer: TranslationRecognizer);
    protected processTypeSpecificMessages(connectionMessage: SpeechConnectionMessage): Promise<boolean>;
    protected cancelRecognition(sessionId: string, requestId: string, cancellationReason: CancellationReason, errorCode: CancellationErrorCode, error: string): void;
    private fireEventForResult;
    private sendSynthesisAudio;
}
