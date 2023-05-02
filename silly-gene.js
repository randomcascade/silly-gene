const chars = {
    "T": "A",
    "A": "U",
    "C": "G",
    "G": "C"
  };
const codon2amino = {
    "GCC": "Alanine",
    "GCG": "Alanine",
    "GCA": "Alanine",
    "GCU": "Alanine",
    "GUC": "Valine",
    "GUG": "Valine",
    "GUA": "Valine",
    "GUU": "Valine",
    "GAU": "Aspartate",
    "GAC": "Aspartate",
    "GAA": "Glutamate",
    "GAG": "Glutamate",
    "GGU": "Glycine",
    "GGC": "Glycine",
    "GGA": "Glycine",
    "GGG": "Glycine",
    "ACC": "Threonine",
    "ACG": "Threonine",
    "ACA": "Threonine",
    "ACU": "Threonine",
    "CCC": "Proline",
    "CCG": "Proline",
    "CCA": "Proline",
    "CCU": "Proline",
    "CUC": "Leucine",
    "CUG": "Leucine",
    "CUA": "Leucine",
    "CUU": "Leucine",
    "UCC": "Serine",
    "UCG": "Serine",
    "UCA": "Serine",
    "UCU": "Serine",
    "AAU": "Asparagine",
    "AAC": "Asparagine",
    "AAA": "Lysine",
    "AAG": "Lysine",
    "CAU": "Histidine",
    "CAC": "Histidine",
    "CAA": "Glutamine",
    "CAG": "Glutamine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "UAA": "STOP",
    "UAG": "STOP",
    "UUU": "Phenylalanine",
    "UUC": "Phenylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",
    "AUC": "Isoleucine",
    "AUG": "START/Methionine",
    "AUA": "Isoleucine",
    "AUU": "Isoleucine",
    "AGU": "Serine",
    "AGC": "Serine",
    "AGA": "Arginine",
    "AGG": "Arginine",
    "CGU": "Arginine",
    "CGC": "Arginine",
    "CGA": "Arginine",
    "CGG": "Arginine",
    "UGU": "Cysteine",
    "UGC": "Cysteine",
    "UGA": "STOP",
    "UGG": "Tryptophan"
};

const transcribe = document.querySelector('.transcribe');
transcribe.addEventListener('click', display_mRNA);
const RNA = document.querySelector('.RNA');
const aminoText = document.querySelector('.aminoText');

function display_mRNA() {
    let dna = document.getElementById("sequence").value.trim();
    if(dna.length == 0) {
        return;
    }
    console.log(`Original string: ${dna}`);
    let mRNA = dna.replace(/[CAGT]/g, m => chars[m]);
    console.log(`mRNA result: ${mRNA}`);
    RNA.textContent = "mRNA Sequence: " + mRNA;
    const codons = mRNA.match(/.{1,3}/g);
    console.log(`Codons: ${codons}`);
    let aminos = "";
    for(i of codons) {
        if(i.length == 3) {
            aminos += codon2amino[i];
        } else {
            aminos += "leftover bases: ";
            aminos += i;
        }
        aminos += ", "
    }
    aminoText.textContent = "Amino Acids: " + aminos;
}
