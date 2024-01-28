import React, { useState } from "react";
import Section from "./section";
import ButtonOne from "../../../components/buttonone";
import InputOne from "../../../components/inputone";
import Dictionary from "../../../utils/dictionary";
import Modal from "../../../components/modal";
import ModalButton from "../../../components/modalbutton";
import Paragraph from "../../../components/paragraph";
import "../../../assets/styles/basestyles.css";

function Unscrambler() {
    const [inputCharacters, setInputCharacters] = useState("");
    const [sections, setSections] = useState({});
    const [wordCount, setWordCount] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const onKeyUpHandler = (e) => {
        if (e.key === 'Enter') {
            findHandler();
        }

        if (e.key === 'Escape') {
            setInputCharacters('');
            const foundWords = [];
            setWordCount(foundWords.length);
            const wordMap = buildWordMap(foundWords);
            setSections(wordMap);
        }

        if (e.key === '~') {
            // reset input
            setInputCharacters('');
            const foundWords = Dictionary;
            setWordCount(foundWords.length);
            const wordMap = buildWordMap(foundWords);
            setSections(wordMap);
        }
    }

    const findHandler = () => {
        const foundWords = findWords(inputCharacters);
        setWordCount(foundWords.length);
        const wordMap = buildWordMap(foundWords);
        setSections(wordMap);
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
                <h1>Unscrambler</h1>
                <ModalButton onClick={() => setIsOpen(true)} />
            </div>

            <InputOne placeholder={"enter some letters!"}
                type={"text"}
                onKeyUp={e => onKeyUpHandler(e)}
                onInput={e => setInputCharacters(e.target.value)}
                value={inputCharacters}
            />
            <ButtonOne onClick={findHandler}
                text={"Unscramble"} />

            {<h2>{`Found: ${wordCount} words!`}</h2>}
            {Object.keys(sections).map((key) => <Section count={key} words={sections[key]} />)}

        </div >
    )
}

function buildWordMap(foundWords) {
    let wordMap = {}
    foundWords.forEach(w => {
        if (wordMap[w.length] === undefined) {
            wordMap[w.length] = [];
            wordMap[w.length].push(w);
        }
        else {
            wordMap[w.length].push(w);
        }
    });
    return wordMap;
}

function findWords(str) {
    // remove any unwanted chars
    // make sure we are working with all upper case letters
    // get str as char array
    const chars = str.replace(/[^a-zA-Z]+/g, '').toUpperCase().split('');

    const trimmedDictionary = [];
    Dictionary.forEach(w => {
        // store a hash map of chars and char count
        let tempMap = buildCharMap(chars);
        let include = true;

        w.split('').forEach(c => {
            // don't include the word if it is has a char not in the hashmap
            if (tempMap[c] === undefined) {
                include = false;
            }
            // don't include the word if we have run out of letters
            else {
                tempMap[c]--;
                if (tempMap[c] < 0) {
                    include = false;
                }
            }
        });

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

export default Unscrambler;