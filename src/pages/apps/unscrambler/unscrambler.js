import React from "react";
import Section from "./section";
import ButtonOne from "../../../components/buttonone";
import InputOne from "../../../components/inputone";
import Dictionary from "../../../utils/dictionary";
import "../../../assets/styles/basestyles.css";

function Unscrambler() {
    const [inputCharacters, setInputCharacters] = React.useState("");
    const [sections, setSections] = React.useState({});
    const [wordCount, setWordCount] = React.useState(0);

    const onKeyUpHandler = (e) => {
        if (e.key === 'Enter') {
            findHandler();
        }
    }

    const findHandler = () => {
        let foundWords = findWords(inputCharacters);
        setWordCount(foundWords.length);

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

        setSections(wordMap);
    }

    return (
        <div className="base">
            <h1>Unscrambler</h1>
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

function findWords(str) {
    // remove any unwanted chars
    // make sure we are working with all upper case letters
    // get str as char array
    const chars = str.replace(/[^a-zA-Z]+/g, '').toUpperCase().split('');

    // let trimmedDictionary = Dictionary.map(w => w.toUpperCase());
    // const trimmedDictionary = Dictionary.filter(w => {
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