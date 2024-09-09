import { readFile } from "fs/promises";

type Card = string & {
    length: 2;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    0: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "J" | "K" | "Q" | "T";
    // eslint-disable-next-line @typescript-eslint/naming-convention
    1: "C" | "D" | "H" | "S";
};

const compareCards = (card1: Card, card2: Card): number => {
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];

    return values.indexOf(card1[0]) - values.indexOf(card2[0]);
};
const sortCards = (hand: Card[]): Card[] => hand.sort(compareCards);
const getSets = (hand: Card[], groupSize: 2 | 3 | 4): Card[][] => Object
    .values(Object.groupBy(hand, (card) => card[0]))
    .filter((group) => group.length === groupSize);

const hasPair = (hand: Card[]): Card[] | false => {
    const sets = getSets(hand, 2);

    return sets.length === 1 ? sets[0]! : false;
};
const hasTwoPair = (hand: Card[]): Card[] | false => {
    const sets = getSets(hand, 2);

    return sets.length === 2 ? sets.flat() : false;
};
const hasThreeOfAKind = (hand: Card[]): Card[] | false => {
    const sets = getSets(hand, 3);

    return sets.length === 1 ? sets[0]! : false;
};
const hasStraight = (hand: Card[]): Card[] | false => {
    const values = sortCards(hand).map((card) => card[0]);
    const isStraight = values.every((value, index) => {
        if (index === 0)
            return true;

        const previousValue = values[index - 1]!;

        return previousValue === "2" && value === "A" ||
            value.charCodeAt(0) - previousValue.charCodeAt(0) === 1;
    });

    return isStraight ? hand : false;
};
const hasFlush = (hand: Card[]): Card[] | false => (
    hand.map((card) => card[1]).every((suit) => suit === hand[0]![1])
        ? hand
        : false
);
const hasFullHouse = (hand: Card[]): Card[] | false => {
    const tripleSets = getSets(hand, 3);
    const pairSets = getSets(hand, 2);

    return tripleSets.length === 1 && pairSets.length === 1 ? [...tripleSets[0]!, ...pairSets[0]!] : false;
};
const hasFourOfAKind = (hand: Card[]): Card[] | false => {
    const sets = getSets(hand, 4);

    return sets.length === 1 ? sets[0]! : false;
};
const hasStraightFlush = (hand: Card[]): Card[] | false => (
    hasStraight(hand) !== false && hasFlush(hand) !== false
        ? hand
        : false
);
const hasRoyalFlush = (hand: Card[]): Card[] | false => (
    hasStraightFlush(hand) !== false &&
    hand.some((card) => card.startsWith("A")) &&
    hand.some((card) => card.startsWith("T"))
        ? hand
        : false
);

const rankHand = (hand: Card[]): { cards: Card[]; rank: number; } => {
    const checks = [
        hasRoyalFlush(hand),
        hasStraightFlush(hand),
        hasFourOfAKind(hand),
        hasFullHouse(hand),
        hasFlush(hand),
        hasStraight(hand),
        hasThreeOfAKind(hand),
        hasTwoPair(hand),
        hasPair(hand),
    ];

    const rank = 9 - [...checks, true].map(Boolean).indexOf(true);
    const cards = checks[9 - rank] === false ? [] : checks[9 - rank] as Card[];

    return { cards, rank };
};

const compareHands = (hand1: Card[], hand2: Card[]): number => {
    const { cards: cards1, rank: rank1 } = rankHand(hand1);
    const { cards: cards2, rank: rank2 } = rankHand(hand2);

    // If the ranks are different, return the difference
    if (rank1 !== rank2)
        return rank1 - rank2;

    switch (rank1) {
        // Check which pair, three of a kind, four of a kind, or straight is higher
        case 1:
        case 3:
        case 7: {
            const comparison = compareCards(cards1[0]!, cards2[0]!);

            if (comparison !== 0)
                return comparison;

            break;
        }
        // Check which 2 pair is higher
        case 2: {
            let comparison = compareCards(cards1[0]!, cards2[0]!);

            if (comparison !== 0)
                return comparison;

            comparison = compareCards(cards1[2]!, cards2[2]!);

            if (comparison !== 0)
                return comparison;

            break;
        }
        // Check which straight is higher
        case 4:
        case 8: {
            const comparison = compareCards(cards1[4]!, cards2[4]!);

            if (comparison !== 0)
                return comparison;

            break;
        }
        // Check which full house is higher
        case 6: {
            let comparison = compareCards(cards1[0]!, cards2[0]!);

            if (comparison !== 0)
                return comparison;

            comparison = compareCards(cards1[3]!, cards2[3]!);

            if (comparison !== 0)
                return comparison;

            break;
        }
        default:
            break;
    }

    // Check which high card is higher
    for (let i = 0; i < 5; i++) {
        const comparison = compareCards(sortCards(hand1).reverse()[i]!, sortCards(hand2).reverse()[i]!);

        if (comparison !== 0)
            return comparison;
    }

    return 0;
};

const data = await readFile("inputs/p054_poker.txt", "utf-8");
const hands = data.trim()
    .split("\n")
    .map((d) => [d.split(" ").slice(0, 5), d.split(" ").slice(5)]) as Array<[Card[], Card[]]>;

let player1Count = 0;

for (const [hand1, hand2] of hands) {
    if (compareHands(hand1, hand2) > 0)
        player1Count++;
}

export default player1Count;
