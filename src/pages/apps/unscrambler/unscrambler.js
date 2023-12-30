import React from "react";
import Section from "./section";
import ButtonOne from "../../../components/buttonone";
import InputOne from "../../../components/inputone";
import Dictionary from "../../../utils/dictionary";
import "../../../assets/styles/basestyles.css";

function Unscrambler() {
    const [sections, setSections] = React.useState({});
    const [inputCharacters, setInputCharacters] = React.useState("");
    const [wordCount, setWordCount] = React.useState(0);

    const findHandler = () => {
        let foundWords = findWords(inputCharacters);
        setWordCount(foundWords.length);

        let wordMap = {}
        foundWords.map(w => {
            if (wordMap[w.length] === undefined) {
                wordMap[w.length] = [];
                wordMap[w.length].push(w);
            }
            else {
                wordMap[w.length].push(w);
            }
        });
        setSections(wordMap);
    }

    return (
        <div className="base">
            <h1>Unscrambler</h1>
            <InputOne placeholder={"enter some letters!"}
                type={"text"}
                onInput={e => setInputCharacters(e.target.value)}
                value={inputCharacters} />
            <ButtonOne onClick={findHandler}
                text={"Unscramble"} />

            {<h2>{`Found: ${wordCount} words!`}</h2>}
            {Object.keys(sections).map((key) => <Section count={key} words={sections[key]} />)}

        </div >
    )
}

function findWords(str) {
    // get str as char array
    // make sure we are working with all upper case letters
    const chars = str.toUpperCase().split('');
    let trimmedDictionary = Dictionary.map(w => w.toUpperCase());

    trimmedDictionary = trimmedDictionary.filter(w => {
        // store a hash map of chars and char count
        let tempMap = buildCharMap(chars);
        let include = true;

        w.split('').map(c => {
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
            return w;
        }
    });

    return trimmedDictionary;
}

function buildCharMap(chars) {
    let charMap = {};
    chars.map(c => {
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