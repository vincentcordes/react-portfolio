import React, { useState } from "react";
import Section from "./section";
import ButtonOne from "../../../components/buttonone";
import InputOne from "../../../components/inputone";
import InputTwo from "../../../components/inputtwo";
import FiveWordDictionary from "../../../utils/fiveWordDictionary";
import Modal from "../../../components/modal";
import ModalButton from "../../../components/modalbutton";
import Paragraph from "../../../components/paragraph";
import "../../../assets/styles/basestyles.css";

function WordleAssistant() {
    const [charOne, setCharOne] = useState('');
    const [charTwo, setCharTwo] = useState('');
    const [charThree, setCharThree] = useState('');
    const [charFour, setCharFour] = useState('');
    const [charFive, setCharFive] = useState('');
    const [excludeCharOne, setExcludeCharOne] = useState('');
    const [excludeCharTwo, setExcludeCharTwo] = useState('');
    const [excludeCharThree, setExcludeCharThree] = useState('');
    const [excludeCharFour, setExcludeCharFour] = useState('');
    const [excludeCharFive, setExcludeCharFive] = useState('');
    const [excludeCharacters, setExcludeCharacters] = useState('');
    const [includeCharacters, setIncludeCharacters] = useState('');
    const [words, setWords] = useState(FiveWordDictionary)
    const [isOpen, setIsOpen] = useState(false);

    const onKeyUpHandler = (e) => {
        if (e.key === 'Enter') {
            findHandler();
        }
        if (e.key === 'Escape') {
            setCharOne('')
            setCharTwo('')
            setCharThree('')
            setCharFour('')
            setCharFive('')
            setExcludeCharOne('')
            setExcludeCharTwo('')
            setExcludeCharThree('')
            setExcludeCharFour('')
            setExcludeCharFive('')
            setIncludeCharacters('')
            setExcludeCharacters('')
            setWords(FiveWordDictionary)
        }
    }

    const findHandler = () => {
        let positionalChars = [charOne[0], charTwo[0], charThree[0], charFour[0], charFive[0]];
        let excludedPositionalChars = [excludeCharOne, excludeCharTwo, excludeCharThree, excludeCharFour, excludeCharFive,];
        const foundWords = findWords(positionalChars, excludedPositionalChars, includeCharacters, excludeCharacters);
        setWords(foundWords)
    }

    return (

        <div className="base">
            <Modal onClose={() => setIsOpen(false)}
                open={isOpen}
            >
                <Paragraph
                    header={"Motivation"}
                    str={[
                        `My wife and I were coming home from an anniversary trip. I happened to be driving and she wanted help with some Wordle puzzles.
                        I'm not the best at word games to begin with, and I happen to be even more not the best when I can't see what's going on.`
                    ]}
                    children={[]}
                />
                <Paragraph
                    header={"Usage"}
                    str={[
                        "Press Escape to clear the found words.",
                        "If a character is in a known slot enter it into the first corresponding numbered box.",
                        `If a character is included in the word but is in the wrong slot, enter it into the second corresponding numbered box 
                         to exclude it from that slot.`,
                        "If a character is in the word enter it into the included box.",
                        "If a character is not in the word enter it into the excluded box.",
                        `The dictionary in use for this app consists of 4422 words. This is probably not every five letter word in the English language. 
                        If an expected word is missing, the likely cause is that it is not included in the dictionary.`,
                    ]}
                    children={[]}
                />

                <Paragraph
                    header={"Fun Facts"}
                    str={["My wife says this defeats the purpose of the game and takes the fun out.",
                        "She is probably right."
                    ]}
                    children={[]}
                />

            </Modal>

            <div className="base-inline">
                <h1>Wordle Assistant</h1>
                <ModalButton onClick={() => setIsOpen(true)} />
            </div>
            <span style={{ display: 'flex' }} >
                <p style={{ marginRight: '6px' }}>1:</p>
                <InputTwo
                    type={"text"}
                    onKeyUp={e => onKeyUpHandler(e)}
                    onInput={e => setCharOne(e.target.value)}
                    value={charOne}
                />
                <InputOne placeholder={"Exclude from first"}
                    type={"text"}
                    onKeyUp={e => onKeyUpHandler(e)}
                    onInput={e => setExcludeCharOne(e.target.value)}
                    value={excludeCharOne}
                />
            </span>

            <span style={{ display: 'flex' }} >
                <p style={{ marginRight: '6px' }}>2:</p>
                <InputTwo
                    type={"text"}
                    onKeyUp={e => onKeyUpHandler(e)}
                    onInput={e => setCharTwo(e.target.value)}
                    value={charTwo}
                />
                <InputOne placeholder={"Exclude from second"}
                    type={"text"}
                    onKeyUp={e => onKeyUpHandler(e)}
                    onInput={e => setExcludeCharTwo(e.target.value)}
                    value={excludeCharTwo}
                />
            </span>

            <span style={{ display: 'flex' }} >
                <p style={{ marginRight: '6px' }}>3:</p>
                <InputTwo
                    type={"text"}
                    onKeyUp={e => onKeyUpHandler(e)}
                    onInput={e => setCharThree(e.target.value)}
                    value={charThree}
                />
                <InputOne placeholder={"Exclude from third"}
                    type={"text"}
                    onKeyUp={e => onKeyUpHandler(e)}
                    onInput={e => setExcludeCharThree(e.target.value)}
                    value={excludeCharThree}
                />
            </span>
            <span style={{ display: 'flex' }} >
                <p style={{ marginRight: '6px' }}>4:</p>
                <InputTwo
                    type={"text"}
                    onKeyUp={e => onKeyUpHandler(e)}
                    onInput={e => setCharFour(e.target.value)}
                    value={charFour}
                />
                <InputOne placeholder={"Exclude from fourth"}
                    type={"text"}
                    onKeyUp={e => onKeyUpHandler(e)}
                    onInput={e => setExcludeCharFour(e.target.value)}
                    value={excludeCharFour}
                />
            </span>
            <span style={{ display: 'flex' }} >
                <p style={{ marginRight: '6px' }}>5:</p>
                <InputTwo
                    type={"text"}
                    onKeyUp={e => onKeyUpHandler(e)}
                    onInput={e => setCharFive(e.target.value)}
                    value={charFive}
                />
                <InputOne placeholder={"Exclude from fifth"}
                    type={"text"}
                    onKeyUp={e => onKeyUpHandler(e)}
                    onInput={e => setExcludeCharFive(e.target.value)}
                    value={excludeCharFive}
                />
            </span>
            <span style={{ display: 'flex' }} >
                <p style={{ marginRight: '6px' }}>Included Letters:</p>
                <InputOne placeholder={"Included letters!"}
                    type={"text"}
                    onKeyUp={e => onKeyUpHandler(e)}
                    onInput={e => setIncludeCharacters(e.target.value)}
                    value={includeCharacters}
                />
            </span>

            <span style={{ display: 'flex' }} >
                <p style={{ marginRight: '6px' }}>Excluded Letters:</p>
                <InputOne placeholder={"Excluded letters!"}
                    type={"text"}
                    onKeyUp={e => onKeyUpHandler(e)}
                    onInput={e => setExcludeCharacters(e.target.value)}
                    value={excludeCharacters}
                />
            </span>


            <ButtonOne onClick={findHandler}
                text={"Find Options"} />

            <Section words={words} />

        </div >
    )
}


// Passing in arrays because I don't care for long method signitures
// positional char array = char is gauranteed at said position
// excluded positional char array = char is gauranteed but not at said position
// include = char is gauranteed no known position
// exclude = char is not in the word
function findWords(positionalCharArray, excludedPositionalChars, include, exclude) {
    // remove any unwanted chars
    // make sure we are working with all upper case letters

    for (let i = 0; i < 5; i++) {
        if (positionalCharArray[i] !== undefined) {
            // sneaky [i][0]
            positionalCharArray[i] = positionalCharArray[i].replace(/[^a-zA-Z]+/g, '').toUpperCase();
        }
    }
    for (let i = 0; i < 5; i++) {
        if (excludedPositionalChars[i] !== undefined) {
            excludedPositionalChars[i] = excludedPositionalChars[i].replace(/[^a-zA-Z]+/g, '').toUpperCase();
        }
    }

    const includeChars = include.replace(/[^a-zA-Z]+/g, '').toUpperCase().split('');
    const excludeChars = exclude.replace(/[^a-zA-Z]+/g, '').toUpperCase().split('');

    let trimmedDictionary = [];
    FiveWordDictionary.forEach(w => {
        let include = true;

        // remove words with excluded letters first
        excludeChars.forEach(c => {
            if (w.includes(c)) {
                include = false;
            }
        });

        // early break when possible
        if (!include) return;

        // include characters are different from exclude
        if (includeChars.length > 0) {
            includeChars.forEach(c => {
                if (!w.includes(c)) {
                    include = false;
                }
            });
        }

        // early break when possible
        if (!include) return;

        // check for chars we know are at a position
        for (let i = 0; i < 5; i++) {
            if (positionalCharArray[i] !== undefined) {
                if (w[i] !== positionalCharArray[i][0]) {
                    include = false;
                }
            }
        }

        // check for chars we know are not at a position
        excludedPositionalChars.forEach(c => {
            if (c !== undefined) {
                for (let i = 0; i < 5; i++) {
                    if (w[i] === c) {
                        include = false;
                    }
                }
            }
        });

        if (include) {
            trimmedDictionary.push(w);
        }
    });
    return trimmedDictionary;
}

export default WordleAssistant;