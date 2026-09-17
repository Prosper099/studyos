import Mathematics from './curriculum-mathematics.mjs';
import BasicScience from './curriculum-basic-science.mjs';
import EnglishLanguage from './curriculum-english-language.mjs';
import BasicTechnology from './curriculum-basic-technology.mjs';
import Physics from './curriculum-physics.mjs';
import Chemistry from './curriculum-chemistry.mjs';
import Biology from './curriculum-biology.mjs';
import Government from './curriculum-government.mjs';
import LiteratureInEnglish from './curriculum-literature-in-english.mjs';
import History from './curriculum-history.mjs';
import Economics from './curriculum-economics.mjs';
import Commerce from './curriculum-commerce.mjs';
import FinancialAccounting from './curriculum-financial-accounting.mjs';
import { SS1_EXPANSION } from './curriculum-ss1-expansion.mjs';

export const CURRICULUM = {
  'Mathematics': Mathematics,
  'Basic Science': BasicScience,
  'English Language': EnglishLanguage,
  'Basic Technology': BasicTechnology,
  'Physics': Physics,
  'Chemistry': Chemistry,
  'Biology': Biology,
  'Government': Government,
  'Literature in English': LiteratureInEnglish,
  'History': History,
  'Economics': Economics,
  'Commerce': Commerce,
  'Financial Accounting': FinancialAccounting
};

/* Append the SS1 expansion bank: guarantees every senior subject a pool of
   50+ class-appropriate questions from the student's first term in SS1. */
for (const [sub, byTopic] of Object.entries(SS1_EXPANSION)) {
  const s = CURRICULUM[sub];
  if (!s) continue;
  for (const [title, qs] of Object.entries(byTopic)) {
    const t = (s.topics.SS1 || []).find(x => x.title === title);
    if (t) t.quiz = (t.quiz || []).concat(qs);
  }
}
