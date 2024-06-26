import { IAccountMeta, IInstruction } from '@solana/instructions';

export type BaseTransactionMessage<
    TVersion extends TransactionVersion = TransactionVersion,
    TInstruction extends IInstruction = IInstruction,
> = Readonly<{
    instructions: readonly TInstruction[];
    version: TVersion;
}>;

type ILegacyInstruction<TProgramAddress extends string = string> = IInstruction<
    TProgramAddress,
    readonly IAccountMeta[]
>;
type LegacyTransactionMessage = BaseTransactionMessage<'legacy', ILegacyInstruction>;
type V0TransactionMessage = BaseTransactionMessage<0, IInstruction>;

export type TransactionMessage = LegacyTransactionMessage | V0TransactionMessage;
export type TransactionVersion = 'legacy' | 0;
