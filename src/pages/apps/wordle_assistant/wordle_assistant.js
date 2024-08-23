import React, { useState } from "react";
import Section from "./section";
import ButtonOne from "../../../components/buttonone";
import InputOne from "../../../components/inputone";
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
            setIncludeCharacters('')
            setExcludeCharacters('')
            setWords(FiveWordDictionary)
        }
    }

    const findHandler = () => {
        const foundWords = findWords(charOne, charTwo, charThree, charFour, charFive, includeCharacters, excludeCharacters);
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
                        "I first had the idea for an 'unscrambler' or 'word finder' app somewhere back in 2019 while playing Wordscapes on Android."
                    ]}
                    children={[]}
                />
                <Paragraph
                    header={"Usage"}
                    str={[
                        "Press Escape to clear the found words.",
                        "Press ~ to list the entire dictionary.",
                        "The dictionary in use for this application consists of 61128 words. This is not every word in the English language. If an expected word is missing, the likely cause is that it is not included in the dictionary.",
                    ]}
                    children={[]}
                />

                <Paragraph
                    header={"Fun Facts"}
                    str={["This is third version of an unscrambler I've built.",
                        "The original version was built as a C# library that I've used on Android (Xamarin Forms) and Blazor Server.",
                        "I also have a python version tucked away in a Bitbucket repository.",
                    ]}
                    children={[]}
                />

            </Modal>

            <div className="base-inline">
                <h1>Wordle Assistant</h1>
                <ModalButton onClick={() => setIsOpen(true)} />
            </div>

            <InputOne
                type={"text"}
                onKeyUp={e => onKeyUpHandler(e)}
                onInput={e => setCharOne(e.target.value)}
                value={charOne}
            />
            <InputOne
                type={"text"}
                onKeyUp={e => onKeyUpHandler(e)}
                onInput={e => setCharTwo(e.target.value)}
                value={charTwo}
            />
            <InputOne
                type={"text"}
                onKeyUp={e => onKeyUpHandler(e)}
                onInput={e => setCharThree(e.target.value)}
                value={charThree}
            />
            <InputOne
                type={"text"}
                onKeyUp={e => onKeyUpHandler(e)}
                onInput={e => setCharFour(e.target.value)}
                value={charFour}
            />
            <InputOne
                type={"text"}
                onKeyUp={e => onKeyUpHandler(e)}
                onInput={e => setCharFive(e.target.value)}
                value={charFive}
            />

            <InputOne placeholder={"Included letters!"}
                type={"text"}
                onKeyUp={e => onKeyUpHandler(e)}
                onInput={e => setIncludeCharacters(e.target.value)}
                value={includeCharacters}
            />

            <InputOne placeholder={"Excluded letters!"}
                type={"text"}
                onKeyUp={e => onKeyUpHandler(e)}
                onInput={e => setExcludeCharacters(e.target.value)}
                value={excludeCharacters}
            />


            <ButtonOne onClick={findHandler}
                text={"Find Options"} />

            <Section words={words} />

        </div >
    )
}


function findWords(charOne, charTwo, charThree, charFour, charFive, include, exclude) {
    // remove any unwanted chars
    // make sure we are working with all upper case letters
    // get str as char array
    //const includeChars = include.replace(/[^a-zA-Z]+/g, '').toUpperCase().split('');
    charOne = charOne.replace(/[^a-zA-Z]+/g, '').toUpperCase().split('')[0];
    charTwo = charTwo.replace(/[^a-zA-Z]+/g, '').toUpperCase().split('')[0];
    charThree = charThree.replace(/[^a-zA-Z]+/g, '').toUpperCase().split('')[0];
    charFour = charFour.replace(/[^a-zA-Z]+/g, '').toUpperCase().split('')[0];
    charFive = charFive.replace(/[^a-zA-Z]+/g, '').toUpperCase().split('')[0];
    const positionalChars = [charOne, charTwo, charThree, charFour, charFive];
    const includeChars = include.replace(/[^a-zA-Z]+/g, '').toUpperCase().split('');
    const excludeChars = exclude.replace(/[^a-zA-Z]+/g, '').toUpperCase().split('');

    console.log(positionalChars);
    console.log(includeChars);
    console.log(excludeChars);

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

        for (let i = 0; i < 5; i++) {
            if (positionalChars[i] !== undefined) {
                if (w[i] !== positionalChars[i]) {
                    include = false;
                }
            }
        }

        // early break when possible
        if (!include) return;



        if (include) {
            trimmedDictionary.push(w);
        }
    });
    return trimmedDictionary;
}

function buildCharMap(chars) {
    let charMap = {};
    chars.forEach(c => {
        if (charMap[c] === undefined) {
            charMap[c] = 1;
        }
        else {
            charMap[c]++;
        }
    });
    return charMap;
}

export default WordleAssistant;