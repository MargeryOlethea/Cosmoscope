import { TransactionMessage } from "../types/transaction.types";

export function stringSimplifier(text: string, len: number = 5): string {
  if (text.length <= len * 2) {
    return text;
  }
  const startText = text.slice(0, len);
  const endText = text.slice(-len);

  return `${startText}...${endText}`;
}

export function messageExtractor(messagesArray: TransactionMessage[]): string {
  return messagesArray.reduce((acc, message) => {
    const splittedMessage = message.typeUrl.split(".");
    const finalMessage = splittedMessage[splittedMessage.length - 1]
      .replace("Msg", "")
      .split(/(?=[A-Z])/)
      .join(" ");

    if (acc.includes(finalMessage)) return acc;

    return acc ? [acc, finalMessage].join(", ") : finalMessage;
  }, "");
}

export function proposalStatusSplitter(status: string): string {
  switch (status) {
    case "PROPOSAL_STATUS_PASSED":
      return "Passed";
    case "PROPOSAL_STATUS_REJECTED":
      return "Rejected";
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return "Voting Period";
    default:
      return "Unknown Status";
  }
}

export function proposalTypeSplitter(proposalType: string): string {
  const parts: string[] = proposalType.split(".");

  const lastWord: string = parts[parts.length - 1];

  const words: string[] = lastWord.split(/(?=[A-Z])/);

  const capitalizedWords: string[] = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );

  const formattedType: string = capitalizedWords.join(" ");

  return formattedType;
}

export function validatorStatusSplitter(status: string): string {
  switch (status) {
    case "BOND_STATUS_BONDED":
      return "Bonded";
    case "BOND_STATUS_UNBONDED":
      return "Unbonded";
    case "BOND_STATUS_UNBONDING":
      return "Unbonding";
    default:
      return "Unknown Status";
  }
}
