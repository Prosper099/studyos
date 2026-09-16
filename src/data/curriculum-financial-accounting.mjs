export default {

    color: 'green', icon: '🧾', blurb: 'Double entry, books of account and final accounts — the skill that pays bills.',
    topics: {
      SS1: [
        {
          title: 'Introduction to Accounting & the Accounting Equation',
          tags: ['Double entry', 'Assets = Capital + Liabilities', 'Users of accounts'],
          summary: 'What accounting does, who uses it, the double-entry idea and the equation everything balances on.',
          content: `

            <h3>1. What accounting is</h3>
            <p>Accounting is the process of <b>recording, classifying, summarising and interpreting</b> the financial transactions of a business, so that people can make decisions from the results. It is often called the <b>language of business</b> because it tells you, in numbers, whether a business is healthy.</p>
            <ul>
              <li><b>Recording:</b> writing every transaction in the books, in naira and kobo.</li>
              <li><b>Classifying:</b> grouping similar transactions (all sales together, all rent together).</li>
              <li><b>Summarising:</b> preparing the final accounts and the statement of financial position.</li>
              <li><b>Interpreting:</b> explaining what the figures mean for decisions.</li>
            </ul>
            <p><b>Users of accounting information:</b> the owner (is my business growing?), managers, investors, creditors/suppliers (will they pay?), banks (should we lend?), government (taxes), and employees (job security). WAEC loves asking you to list them.</p>

            <h3>2. Key terms you must own</h3>
            <ul>
              <li><b>Asset:</b> anything the business owns or is owed — cash, stock, vehicles, debtors, buildings.</li>
              <li><b>Liability:</b> what the business owes outsiders — creditors, bank loan, unpaid bills.</li>
              <li><b>Capital (owner's equity):</b> what the owner invested; the business owes it back to the owner.</li>
              <li><b>Drawings:</b> goods or cash the owner takes for personal use — it <b>reduces</b> capital.</li>
              <li><b>Revenue/expense:</b> income from trading vs the costs of running the business.</li>
              <li><b>Transaction:</b> an exchange that can be measured in money — a chat with a customer is not one.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> "capital" is a liability of the business <b>to the owner</b> — that is why it sits on the liability side of the equation. This single idea unlocks the whole topic.</div>

            <h3>3. The accounting equation</h3>
            <div class="formula">Assets = Capital + Liabilities • also: Capital = Assets − Liabilities</div>
            <p>Every transaction has a <b>dual effect</b> (the dual aspect concept), so the equation always balances. Learn the six basic movements by heart:</p>
            <ul>
              <li>Owner starts business with ₦100,000 cash → cash (asset) up, capital up.</li>
              <li>Buy goods for ₦20,000 cash → stock up, cash down (asset swaps, total unchanged).</li>
              <li>Buy goods on credit ₦10,000 → stock up, liability (creditor) up.</li>
              <li>Pay creditor ₦5,000 → cash down, liability down.</li>
              <li>Owner takes ₦2,000 cash as drawings → cash down, capital down.</li>
              <li>Business earns profit → capital increases (profit belongs to the owner).</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Ada starts with ₦50,000 cash; buys a shelf ₦10,000 cash; buys stock ₦15,000 on credit. Show the equation.<br>
            Cash = 50,000 − 10,000 = 40,000; Shelf = 10,000; Stock = 15,000 → Assets = 65,000.<br>
            Capital = 50,000; Liabilities (creditor) = 15,000 → 65,000 = 50,000 + 15,000 ✓ balanced.</div>

            <h3>4. Worked practice (exam style)</h3>
            <div class="worked"><b>Q1.</b> A business has assets ₦240,000 and liabilities ₦90,000. Find capital.<br>
            Capital = 240,000 − 90,000 = <b>₦150,000</b>.</div>
            <div class="worked"><b>Q2.</b> Capital ₦80,000, liabilities ₦35,000. Find total assets.<br>
            Assets = 80,000 + 35,000 = <b>₦115,000</b>.</div>
            <div class="worked"><b>Q3.</b> Which transaction leaves total assets <b>unchanged</b>? Buying a machine by cheque.<br>
            Machine (asset) rises, bank (asset) falls by the same amount — a swap inside assets.</div>

            <h3>5. Accounting in Nigeria</h3>
            <p>Professional accountants in Nigeria qualify through <b>ICAN</b> (Institute of Chartered Accountants of Nigeria) or CITN, and businesses must keep proper records under the Companies and Allied Matters Act (CAMA). Bookkeeping is the recording stage; accounting adds the analysis. Careers: auditor, tax adviser, accountant, bank officer.</p>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Treating capital as an asset — it is owed <b>to</b> the owner, so it is a liability of the business.</li>
              <li>Adding drawings to capital instead of subtracting them.</li>
              <li>Counting the owner's personal car or house as a business asset (business entity concept).</li>
              <li>Forgetting that buying on credit raises <b>both</b> an asset and a liability.</li>
              <li>Writing the equation as Assets = Capital − Liabilities.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> in any equation question, write A = C + L first, circle the unknown, then substitute. Ten seconds, no errors.</div>
          `,
          quiz: [
            { q: 'Accounting is best described as', options: ['counting money', 'recording, summarising and interpreting financial transactions', 'auditing only', 'tax calculation'], correct: 1, exp: 'Recording plus interpretation for decisions.' },
            { q: 'Which user checks whether to buy shares?', options: ['Government', 'Investors', 'Employees', 'Customers'], correct: 1, exp: 'Investors use accounts to value the business.' },
            { q: 'Bookkeeping differs from accounting because bookkeeping', options: ['interprets', 'only records transactions', 'audits', 'taxes'], correct: 1, exp: 'Accounting adds analysis to recording.' },
            { q: 'An asset is', options: ['what the business owes', 'what the business owns', 'the owner&apos;s salary', 'a loss'], correct: 1, exp: 'Cash, stock, vehicles, premises.' },
            { q: 'A liability is', options: ['what the business owns', 'what it owes outsiders', 'profit', 'capital'], correct: 1, exp: 'A liability is what the business owes to outsiders.' },
            { q: 'The owner&apos;s stake is', options: ['liability', 'capital', 'debtor', 'expense'], correct: 1, exp: 'Capital is owed to the owner.' },
            { q: 'A debtor', options: ['owes the business', 'is owed by the business', 'sells goods', 'audits'], correct: 0, exp: 'Debtors owe us money.' },
            { q: 'The accounting equation is', options: ['Assets = Capital − Liabilities', 'Assets = Capital + Liabilities', 'Capital = Assets + Liabilities', 'Assets + Capital = Liabilities'], correct: 1, exp: 'Assets equal capital plus liabilities.' },
            { q: 'Assets 500k, liabilities 200k; capital is', options: ['700k', '300k', '200k', '500k'], correct: 1, exp: 'Capital = 500k − 200k = 300k.' },
            { q: 'Double entry means', options: ['writing twice for safety', 'every debit has an equal credit', 'two accountants', 'two books'], correct: 1, exp: 'The dual aspect of each transaction.' }
          ],
          cards: [
            { q: 'Define accounting.', a: 'The systematic recording, classification, summarising and interpretation of financial transactions.' },
            { q: 'Name three users of accounts.', a: 'Owners/managers, investors, creditors, government, employees.' },
            { q: 'What is bookkeeping?', a: 'The recording stage of accounting.' },
            { q: 'What is an asset?', a: 'Anything the business owns — cash, stock, vehicles, premises.' },
            { q: 'What is a liability?', a: 'What the business owes outsiders.' },
            { q: 'What is capital?', a: 'The owner&apos;s stake in the business.' },
            { q: 'Who is a debtor?', a: 'A person who owes the business money.' },
            { q: 'Who is a creditor?', a: 'A person the business owes.' },
            { q: 'State the accounting equation.', a: 'Assets = Capital + Liabilities.' },
            { q: 'Capital 80k, liabilities 20k → assets?', a: '100k.' },
            { q: 'What is double entry?', a: 'Recording each transaction in two accounts so debits equal credits.' },
            { q: 'Why does the equation always balance?', a: 'Because every transaction has a dual aspect entered twice.' },
            { q: 'Buying goods on credit affects which items?', a: 'Adds stock (asset) and a creditor (liability); cash untouched.' },
            { q: 'Assets 1m, capital 600k → liabilities?', a: '400k.' },
            { q: 'Accounting helps decisions how?', a: 'By turning raw transactions into interpreted performance information.' }
          ],
        },
        {
          title: 'Source Documents & Books of Original Entry',
          tags: ['Invoice & receipt', 'Credit note', 'Journals', 'Cash book'],
          summary: 'The paper trail of a business — every document from invoice to voucher, and the books where transactions first land.',
          content: `

            <h3>1. The accounting trail</h3>
            <p>Every figure in final accounts travels a fixed route: <b>source document → book of original entry → ledger → trial balance → final accounts</b>. Exams reward students who can name the document and the first book for any transaction.</p>

            <h3>2. Source documents — the evidence</h3>
            <ul>
              <li><b>Invoice:</b> sent by the seller, listing goods, quantities and prices; states credit terms.</li>
              <li><b>Receipt:</b> acknowledges payment — issued when money is <b>received</b>, not when goods are ordered.</li>
              <li><b>Credit note:</b> issued by the seller to <b>reduce</b> what the buyer owes (returned or damaged goods, overcharge).</li>
              <li><b>Debit note:</b> issued by the buyer (or seller) to <b>increase</b> an amount owed — e.g. an undercharge corrected.</li>
              <li><b>Voucher:</b> internal evidence for a payment, attached to the receipt before money goes out.</li>
              <li><b>Petty cash voucher:</b> evidence for each small petty payment.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Ada returns ₦4,000 of cracked plates to her supplier. Which document arrives?<br>
            The supplier sends a <b>credit note</b> for ₦4,000 — it reduces Ada's debt. (Ada does not write it herself.)</div>

            <h3>3. Books of original entry (books of prime entry)</h3>
            <ul>
              <li><b>Cash book:</b> all cash and bank receipts and payments. Triple-column versions add <b>discount</b> columns (memorandum only — discounts are not posted from the cash book's discount columns as cash).</li>
              <li><b>Petty cash book:</b> small payments (stamps, transport, tea), usually run on the <b>imprest system</b>.</li>
              <li><b>Sales day book:</b> <b>credit</b> sales only. <b>Purchases day book:</b> credit purchases only.</li>
              <li><b>Returns inwards book:</b> goods customers brought back. <b>Returns outwards book:</b> goods we returned to suppliers.</li>
              <li><b>The journal:</b> anything that fits nowhere else — opening entries, corrections, purchase of fixed assets on credit.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> "cash sales" go to the <b>cash book</b>, not the sales day book — the day books are for <b>credit</b> transactions. This single confusion costs thousands of marks yearly.</div>

            <h3>4. The imprest system, worked</h3>
            <p>The petty cashier starts each period with a fixed <b>imprest</b> (float). At period end the head cashier refunds exactly what was spent, restoring the float.</p>
            <div class="worked"><b>Worked example:</b> Float ₦20,000; the month's payments total ₦13,500. How much is refunded and what cash remains?<br>
            Cash in hand = 20,000 − 13,500 = 6,500. Refund = <b>₦13,500</b>, restoring the float to 20,000. Merits: control (every kobo is vouched), and the main cashier keeps one check on small spending.</div>

            <h3>5. Which book for which transaction? Drill</h3>
            <ul>
              <li>Bought motor van on credit from Toyota → <b>journal</b> (asset on credit, not stock).</li>
              <li>Sold goods on credit to Musa → <b>sales day book</b>.</li>
              <li>Musa returned part of them → <b>returns inwards book</b>.</li>
              <li>Paid shop rent by cheque → <b>cash book (bank column)</b>.</li>
              <li>Bought stamps for the office → <b>petty cash book</b>.</li>
              <li>Corrected an error of principle → <b>journal</b>.</li>
            </ul>

            <h3>6. Common mistakes that cost marks</h3>
            <ul>
              <li>Entering cash sales in the sales day book.</li>
              <li>Issuing a receipt for a credit sale — the invoice is the document until money moves.</li>
              <li>Confusing credit note (debt <b>down</b>) with debit note (debt <b>up</b>).</li>
              <li>Refunding the float instead of the amount spent under imprest.</li>
              <li>Treating the discount columns of the cash book as cash received or paid.</li>
            </ul>
            <div class="tip"><b>Speed trick:</b> ask two questions — did <b>cash</b> move? (cash/petty book) — if not, was it <b>stock on credit</b>? (day books/returns) — otherwise <b>journal</b>. Three seconds, always right.</div>
          `,
          quiz: [
            { q: 'The seller&apos;s bill listing goods and prices is the', options: ['receipt', 'invoice', 'voucher', 'cheque'], correct: 1, exp: 'The invoice starts the paper trail.' },
            { q: 'Proof of payment is the', options: ['invoice', 'receipt', 'debit note', 'journal'], correct: 1, exp: 'Receipts acknowledge payment.' },
            { q: 'Returned goods from a customer are corrected with a', options: ['debit note', 'credit note', 'voucher', 'invoice'], correct: 1, exp: 'Credit notes fix overcharges and returns.' },
            { q: 'A debit note corrects', options: ['overcharges', 'undercharges', 'payments', 'wages'], correct: 1, exp: 'We billed too little — debit note.' },
            { q: 'Credit sales are first recorded in the', options: ['cash book', 'sales day book', 'petty cash book', 'journal'], correct: 1, exp: 'Day books hold credit trade.' },
            { q: 'Cash sales are recorded in the', options: ['sales day book', 'cash book', 'purchases book', 'journal'], correct: 1, exp: 'Money goes straight to the cash book.' },
            { q: 'Bought a machine on credit: first book is the', options: ['purchases day book', 'journal', 'cash book', 'sales book'], correct: 1, exp: 'Assets on credit bypass the purchases day book.' },
            { q: 'Small office payments live in the', options: ['cash book', 'petty cash book', 'sales book', 'journal'], correct: 1, exp: 'Petty cash handles small sums.' },
            { q: 'The imprest system means', options: ['unlimited cash', 'a fixed float restored each period', 'no records', 'monthly audits'], correct: 1, exp: 'The float is topped back to a fixed sum.' },
            { q: 'The correct flow is document → original entry →', options: ['trial balance → ledger', 'ledger → trial balance → final accounts', 'final accounts → ledger', 'cash book → invoice'], correct: 1, exp: 'Ledger, trial balance, final accounts.' }
          ],
          cards: [
            { q: 'What is an invoice?', a: 'The seller&apos;s bill listing goods, prices and terms of sale.' },
            { q: 'What is a receipt?', a: 'Written proof that payment was made.' },
            { q: 'What is a credit note used for?', a: 'Correcting overcharges or accepting returned goods.' },
            { q: 'What is a debit note used for?', a: 'Correcting undercharges.' },
            { q: 'What is a voucher?', a: 'A document supporting a payment or expense.' },
            { q: 'What does the sales day book record?', a: 'Credit sales only.' },
            { q: 'What does the purchases day book record?', a: 'Credit purchases only.' },
            { q: 'Where do cash sales go?', a: 'Straight into the cash book.' },
            { q: 'What is a three-column cash book?', a: 'A cash book with cash, bank and discount columns.' },
            { q: 'What is the petty cash book?', a: 'The book for small payments, often on imprest.' },
            { q: 'Explain the imprest system.', a: 'A fixed float is given and restored to the same amount each period.' },
            { q: 'What is the journal for?', a: 'Transactions fitting no other book — openings, corrections, credit asset purchases.' },
            { q: 'Why do bought machines on credit go to the journal?', a: 'They are not stock for resale, so not the purchases day book.' },
            { q: 'What is posting?', a: 'Transferring entries from original books to ledger accounts.' },
            { q: 'Give the accounting flow.', a: 'Source document to original entry to ledger to trial balance to final accounts.' }
          ],
        },
      ],
      SS2: [
        {
          title: 'Ledgers, Trial Balance & the Double-Entry Machine',
          tags: ['Ledger', 'Trial balance', 'Posting'],
          summary: 'From journal to ledger to trial balance — how double-entry holds the whole bookkeeping machine together.',
          content: `
            <h3>1. The ledger family</h3>
            <ul>
              <li><b>Sales (debtors) ledger</b> — personal accounts of credit customers.</li>
              <li><b>Purchases (creditors) ledger</b> — personal accounts of credit suppliers.</li>
              <li><b>General ledger</b> — everything else: expenses, assets, capital, cash book relatives.</li>
            </ul>
            <p>Every journal entry is <b>posted</b>: debit side of one account, credit side of the other, same amount, same date, with the other account's name as narration ("to/by").</p>

            <h3>2. Balancing an account</h3>
            <p>Total each side; enter the difference on the smaller side as <b>balance carried down (c/d)</b>; bring totals level; then bring the balance <b>down (b/d)</b> below on the opposite side. A debit balance b/d means asset/expense; a credit balance means liability/income/capital.</p>
            <div class="worked"><b>Worked example:</b> A customer account shows debits N50,000 (invoices) and credits N30,000 (payments). Balance c/d N20,000 on the credit side to total N50,000; then N20,000 b/d on the debit side — the customer still owes N20,000 (a debtor).</div>

            <h3>3. The trial balance</h3>
            <p>A list of all balances at a date: debit balances in one column, credit in the other. If double-entry is arithmetically complete, the columns <b>agree</b>. It is a check, not an account — and it feeds the final accounts.</p>
            <ul>
              <li><b>Errors NOT revealed:</b> complete omission, posting to the wrong account (right side), compensating errors, original wrong figures on both sides, reversal of entries.</li>
              <li><b>Errors revealed:</b> one-sided entries, wrong casting, balance mistakes, posting one side only.</li>
            </ul>
            <p>A <b>suspense account</b> temporarily holds the difference until the errors are found; correcting entries then clear it.</p>

            <h3>4. Common mistakes that cost marks</h3>
            <ul>
              <li>Writing c/d above the totals and b/d on the same side — c/d sits above the totals, b/d below on the opposite side.</li>
              <li>Calling the trial balance an account or a financial statement.</li>
              <li>Listing capital with debit balances — capital is a credit balance.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> "errors not affecting the trial balance" is the most repeated theory question. Memorise the five with one-line examples each (omission; wrong account; compensating; both sides wrong figure; reversal).</div>
          `,
          cards: [
            { q: 'Name the three ledgers.', a: 'Sales (debtors) ledger, purchases (creditors) ledger and the general ledger of all other accounts.' },
            { q: 'What is posting?', a: 'Transferring each journal entry to the ledger: debit one account, credit the other, same amount and date.' },
            { q: 'A debit balance b/d usually means…', a: 'An asset or expense; a credit balance b/d means liability, income or capital.' },
            { q: 'Steps in balancing an account?', a: 'Total both sides, enter the difference as balance c/d on the smaller side, equalise totals, then b/d below on the opposite side.' },
            { q: 'What is the trial balance?', a: 'A list of all ledger balances at a date, debit column against credit column, testing arithmetic completeness.' },
            { q: 'Agreement of the trial balance proves what?', a: 'Only arithmetic completeness of double-entry — it does not prove the books are free of all error.' },
            { q: 'Two errors NOT revealed by a trial balance?', a: 'Complete omission and posting to the wrong account on the correct side; also compensating errors.' },
            { q: 'What is a compensating error?', a: 'Two equal mistakes on opposite sides that cancel, leaving the trial balance agreeing.' },
            { q: 'Reversal of entries means…', a: 'Debiting the account that should be credited and vice versa — totals still agree.' },
            { q: 'What is a suspense account?', a: 'A temporary account holding the trial balance difference until the underlying errors are located.' },
            { q: 'Two errors the trial balance WILL reveal?', a: 'One-sided postings and casting or balancing mistakes, which break the column agreement.' },
            { q: 'Capital appears in the trial balance as a…', a: 'Credit balance, because the business owes it back to the owner.' },
            { q: 'Customer owing N20,000 after balancing is a…', a: 'Debtor — his account carries a debit balance b/d of N20,000.' },
            { q: 'Supplier owed money shows which balance?', a: 'A credit balance in the purchases ledger — a creditor of the business.' },
            { q: 'Where does the narration name go?', a: 'Beside each entry in the ledger, naming the other account of the double entry.' },
          ],
          quiz: [
            { q: 'Credit customers live in the…', options: ['general ledger', 'sales ledger', 'purchases ledger', 'cash book'], correct: 1, exp: 'The sales (debtors) ledger holds personal accounts of credit customers.' },
            { q: 'A debit balance b/d signals…', options: ['a liability', 'an asset or expense', 'income', 'capital'], correct: 1, exp: 'Debits left over mean assets or expenses; credits mean liabilities, income, capital.' },
            { q: 'Balance c/d is entered…', options: ['below the totals', 'on the smaller side above the totals', 'on the larger side', 'in the journal'], correct: 1, exp: 'c/d equalises the two sides; b/d reopens below on the opposite side.' },
            { q: 'The trial balance is…', options: ['an account', 'a financial statement', 'a check of arithmetic completeness', 'a source document'], correct: 2, exp: 'It tests whether the two sides of double-entry agree, nothing more.' },
            { q: 'Which error will NOT disturb the trial balance?', options: ['one-sided posting', 'complete omission', 'wrong casting', 'balance mistake'], correct: 1, exp: 'If nothing was entered at all, both columns miss the same amount.' },
            { q: 'Equal mistakes cancelling each other are…', options: ['reversals', 'compensating errors', 'omissions', 'principles errors'], correct: 1, exp: 'Compensating errors leave agreement intact while the books are wrong.' },
            { q: 'Debiting the creditor and crediting the bank for a payment is…', options: ['correct', 'reversal of entries', 'omission', 'compensation'], correct: 1, exp: 'The correct sides were swapped — totals still agree.' },
            { q: 'A suspense account is used to…', options: ['hide fraud', 'hold a trial balance difference temporarily', 'record capital', 'replace the ledger'], correct: 1, exp: 'It parks the difference until correcting entries clear it.' },
            { q: 'Wrong casting of the purchases account will…', options: ['not be revealed', 'break trial balance agreement', 'cancel out', 'affect only capital'], correct: 1, exp: 'A one-sided casting error changes one balance only.' },
            { q: 'Capital in the trial balance is a…', options: ['debit', 'credit', 'contra', 'suspense'], correct: 1, exp: 'The business owes the owner — capital is credit in nature.' },
          ]
        },
        {
          title: 'Depreciation & Provision for Depreciation',
          tags: ['Depreciation', 'Straight line', 'Reducing balance'],
          summary: 'Why assets lose value, the two main methods with their calculations, and the accounts that record it all.',
          content: `
            <h3>1. What depreciation is</h3>
            <p><b>Depreciation</b> is the wearing out of a fixed asset through use, age, obsolescence or the passage of time. It spreads an asset's cost over its useful life — a matching of cost against the revenue the asset helps earn. Land normally does not depreciate.</p>

            <h3>2. Causes</h3>
            <ul>
              <li><b>Wear and tear</b> from use; <b>age/effluxion of time.</b></li>
              <li><b>Obsolescence</b> — newer models make the old one outdated.</li>
              <li><b>Inadequacy</b> — the asset becomes too small for the growing business.</li>
              <li><b>Depletion</b> for mines and quarries.</li>
            </ul>

            <h3>3. The two main methods</h3>
            <ul>
              <li><b>Straight line:</b> (Cost − Residual value) ÷ Useful life — the same charge every year.</li>
              <li><b>Reducing balance:</b> a fixed percentage applied to the <b>book value</b> each year — charges fall over time.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Machine cost N100,000, residual N10,000, life 5 years. Straight line = (100,000 − 10,000)/5 = <b>N18,000 per year</b>. Reducing balance at 20%: year 1 = 20% × 100,000 = N20,000 (book value 80,000); year 2 = 20% × 80,000 = N16,000 (book value 64,000). Note the falling charge.</div>

            <h3>4. The accounts</h3>
            <ul>
              <li><b>Depreciation expense</b> is debited to profit or loss each year.</li>
              <li><b>Provision for depreciation account</b> accumulates the yearly charges (credit balance).</li>
              <li>In the statement of financial position: cost less accumulated provision = <b>net book value</b>.</li>
            </ul>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Applying the reducing-balance percentage to cost instead of book value.</li>
              <li>Forgetting residual value in the straight-line formula.</li>
              <li>Calling depreciation a cash expense — no money moves; it is an allocation.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> calculation questions: write the formula, substitute, then show the book value after each year. Examiners award method marks even when arithmetic slips.</div>
          `,
          cards: [
            { q: 'Define depreciation.', a: 'The wearing out of a fixed asset through use, age, obsolescence or time, spread as an annual charge.' },
            { q: 'Which asset normally never depreciates?', a: 'Land — it does not wear out through use the way machines and vehicles do.' },
            { q: 'Four causes of depreciation?', a: 'Wear and tear, age, obsolescence, inadequacy and depletion of extractive assets.' },
            { q: 'Straight-line formula?', a: 'Cost minus residual value, divided by useful life — an equal charge each year.' },
            { q: 'Reducing balance applies the percentage to…', a: 'The book value (cost less accumulated depreciation) each year, so charges decline.' },
            { q: 'Machine N100,000, residual N10,000, life 5 years — annual charge?', a: 'N18,000 — (100,000 minus 10,000) divided by 5 years.' },
            { q: 'Reducing balance 20% on N100,000: year 2 charge?', a: 'N16,000 — 20% of the year-2 book value of N80,000.' },
            { q: 'Is depreciation a cash expense?', a: 'No — it allocates cost over life; no cash leaves the business when it is charged.' },
            { q: 'What does the provision for depreciation account hold?', a: 'The accumulated yearly depreciation charges, a credit balance deducted from cost.' },
            { q: 'Net book value equals…', a: 'Cost less accumulated provision for depreciation at the date.' },
            { q: 'Where does the annual depreciation charge go?', a: 'To the profit or loss account as an expense of the period.' },
            { q: 'What is obsolescence?', a: 'Becoming outdated because newer, better models exist, even if the asset still works.' },
            { q: 'Why match depreciation against revenue?', a: 'The asset earns revenue over its life, so its cost should be charged across the same years.' },
            { q: 'Depletion applies to which assets?', a: 'Mines, quarries and oil wells whose substance is physically extracted.' },
            { q: 'Book value after year 1 (20% reducing balance, N100,000)?', a: 'N80,000 — cost N100,000 less the first-year charge of N20,000.' },
          ],
          quiz: [
            { q: 'Depreciation is best described as…', options: ['a cash outflow', 'allocation of an asset\'s cost over its life', 'a valuation of the asset', 'a reserve of cash'], correct: 1, exp: 'It matches cost to the years the asset earns — no cash moves.' },
            { q: 'Straight line on N100,000, residual N10,000, 5 years gives…', options: ['N20,000', 'N18,000', 'N10,000', 'N25,000'], correct: 1, exp: '(100,000 − 10,000) / 5 = 18,000 per year.' },
            { q: 'Reducing balance charges a percentage of…', options: ['cost each year', 'book value each year', 'residual value', 'market value'], correct: 1, exp: 'Applying it to the falling book value makes the charge decline.' },
            { q: 'Year-2 charge at 20% (cost N100,000) is…', options: ['N20,000', 'N16,000', 'N12,800', 'N8,000'], correct: 1, exp: '20% of the N80,000 book value after year 1.' },
            { q: 'Net book value is…', options: ['cost plus provision', 'cost less accumulated provision', 'market value', 'replacement cost'], correct: 1, exp: 'Cost minus the accumulated depreciation to date.' },
            { q: 'The annual charge is expensed in…', options: ['the balance sheet', 'profit or loss', 'the suspense account', 'capital'], correct: 1, exp: 'Depreciation is a period expense of the income statement.' },
            { q: 'Becoming outdated is called…', options: ['depletion', 'obsolescence', 'inadequacy', 'amortisation'], correct: 1, exp: 'Obsolescence strikes when newer models outrun a working asset.' },
            { q: 'Which asset does NOT depreciate?', options: ['vehicles', 'machinery', 'land', 'furniture'], correct: 2, exp: 'Land has an indefinite life for accounting purposes.' },
            { q: 'The provision for depreciation carries a…', options: ['debit balance', 'credit balance', 'nil balance', 'suspense balance'], correct: 1, exp: 'It accumulates charges as a credit, deducted from asset cost.' },
            { q: 'Depreciation exists mainly to…', options: ['save cash', 'match asset cost against revenue over life', 'reduce tax only', 'inflate profit'], correct: 1, exp: 'The matching concept is the reason for the charge.' },
          ]
        },
        {
          title: 'Bank Reconciliation Statements',
          tags: ['Cash book', 'Pass book', 'Reconciliation'],
          summary: 'Why the bank statement and the cash book disagree, and how to walk from one balance to the other.',
          content: `
            <h3>1. Two records of one account</h3>
            <p>The business keeps a <b>cash book</b> (its bank column); the bank keeps a <b>statement/pass book</b>. They should agree — but timing and third-party items make them differ until reconciled.</p>

            <h3>2. Why they differ</h3>
            <ul>
              <li><b>Unpresented cheques:</b> issued by the business but not yet presented — cash book already lower.</li>
              <li><b>Uncredited lodgements (outstanding deposits):</b> paid in but not yet on the statement.</li>
              <li><b>Bank charges, interest and standing orders</b> appear on the statement first.</li>
              <li><b>Dishonoured cheques</b> bounce back; <b>direct debits/credits</b> (salaries out, transfers in) hit the statement first.</li>
              <li><b>Errors</b> by either party.</li>
            </ul>

            <h3>3. The two-stage process</h3>
            <ul>
              <li><b>Stage 1 — update the cash book:</b> enter all statement-only items (charges, interest, dishonours, direct credits/debits) and correct cash-book errors. This gives the <b>true cash-book balance</b> for the balance sheet.</li>
              <li><b>Stage 2 — the reconciliation:</b> start from the statement balance, add unpresented cheques, subtract uncredited lodgements (or vice versa depending on start point), and arrive at the updated cash-book balance.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Updated cash-book balance N74,000. Reconciliation: cash-book balance N74,000, add unpresented cheques N18,000 = N92,000, less uncredited lodgements N6,000 = statement balance <b>N86,000</b>. Both directions must agree.</div>

            <h3>4. Overdrafts</h3>
            <p>A bank <b>overdraft</b> flips the statement to debit; the reconciliation works the same but signs reverse — practise one overdraft example before exam day.</p>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Putting bank charges in the reconciliation instead of first updating the cash book.</li>
              <li>Adding when they should subtract (unpresented vs uncredited mix-up).</li>
              <li>Forgetting that the updated cash-book balance, not the statement, goes to the balance sheet.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> ask of every item: "who knows about it already?" Items only the bank knows → update the cash book. Items only the business knows → live in the reconciliation. That single question sorts every line.</div>
          `,
          cards: [
            { q: 'What two records are reconciled?', a: 'The business cash-book bank column and the bank statement (pass book) kept by the bank.' },
            { q: 'Unpresented cheques are…', a: 'Cheques issued and recorded by the business but not yet presented to the bank for payment.' },
            { q: 'Uncredited lodgements are…', a: 'Deposits entered in the cash book but not yet credited on the bank statement.' },
            { q: 'Three statement-first items?', a: 'Bank charges, interest allowed or charged, standing orders, direct debits and credits, dishonoured cheques.' },
            { q: 'Stage 1 of the process is…', a: 'Updating the cash book with all statement-only items and correcting cash-book errors.' },
            { q: 'Stage 2 of the process is…', a: 'The reconciliation statement walking from the bank balance to the updated cash-book balance.' },
            { q: 'Which balance goes to the balance sheet?', a: 'The updated cash-book balance — the true bank figure after stage 1.' },
            { q: 'Who already knows about bank charges?', a: 'The bank; the business learns from the statement, so the cash book must be updated.' },
            { q: 'A dishonoured cheque requires…', a: 'Reversing the original receipt in the cash book once the statement shows the bounce.' },
            { q: 'What is an overdraft?', a: 'A negative bank balance the bank allows; the statement shows it as a debit balance.' },
            { q: 'Errors by the bank are treated where?', a: 'In the reconciliation statement, since the business cannot alter the bank\'s records.' },
            { q: 'Standing orders appear first on…', a: 'The bank statement; the cash book is updated from them.' },
            { q: 'The key sorting question for each item?', a: 'Who knows about it already — bank-only items update the cash book; business-only items go to the reconciliation.' },
            { q: 'If the cash book shows N50,000 and charges of N2,000 were unrecorded…', a: 'Update the cash book to N48,000 before reconciling — charges reduce the balance.' },
            { q: 'Why prepare a reconciliation at all?', a: 'To prove the two records agree, detect errors and fraud, and find the true bank balance.' },
          ],
          quiz: [
            { q: 'Cheques issued but not yet paid by the bank are…', options: ['uncredited lodgements', 'unpresented cheques', 'dishonoured', 'standing orders'], correct: 1, exp: 'The business recorded them; the bank has not yet paid them.' },
            { q: 'Bank charges belong first to…', options: ['the reconciliation', 'the updated cash book', 'the suspense account', 'capital account'], correct: 1, exp: 'Only the bank knew; the cash book must be updated before reconciling.' },
            { q: 'The balance sheet reports…', options: ['the statement balance', 'the updated cash-book balance', 'the average', 'the overdraft limit'], correct: 1, exp: 'Stage 1 gives the true figure for the statement of financial position.' },
            { q: 'A bounced customer cheque requires…', options: ['no entry', 'reversal in the cash book', 'entry in reconciliation only', 'a suspense entry'], correct: 1, exp: 'The receipt fails, so the cash book must give the amount back.' },
            { q: 'An overdraft appears on the statement as…', options: ['credit balance', 'debit balance', 'nil', 'suspense'], correct: 1, exp: 'The bank owes nothing; the customer owes the bank — debit on the statement.' },
            { q: 'Errors made by the bank are corrected in…', options: ['the cash book', 'the reconciliation statement', 'the journal only', 'the trial balance'], correct: 1, exp: 'The business cannot amend the bank\'s books, so the reconciliation adjusts.' },
            { q: 'Unrecorded interest allowed by the bank…', options: ['reduces the cash book', 'increases the updated cash book', 'goes to reconciliation', 'is ignored'], correct: 1, exp: 'Money the bank added must be added to the cash book in stage 1.' },
            { q: 'The reconciliation statement connects…', options: ['profit and capital', 'cash book and bank statement balances', 'debtors and creditors', 'trial balance and ledger'], correct: 1, exp: 'It walks from one record\'s balance to the other\'s.' },
            { q: 'Direct credit of a customer transfer appears first on…', options: ['the cash book', 'the statement', 'the journal', 'the invoice'], correct: 1, exp: 'The bank received it; the business learns from the statement.' },
            { q: 'Main purpose of reconciliation?', options: ['to hide errors', 'to verify records and find the true balance', 'to increase profit', 'to replace auditing'], correct: 1, exp: 'It proves agreement, exposes mistakes and fraud, and yields the true bank figure.' },
          ]
        }
      ],
      SS3: [
        {
          title: 'Final Accounts of a Sole Trader with Adjustments',
          tags: ['Trading account', 'Profit & loss', 'Adjustments'],
          summary: 'Trading account, profit or loss and the balance sheet — with the classic year-end adjustments done properly.',
          content: `
            <h3>1. The structure</h3>
            <ul>
              <li><b>Trading account:</b> sales less returns, less cost of goods sold (opening stock + purchases less returns − closing stock) = <b>gross profit</b>.</li>
              <li><b>Profit or loss account:</b> gross profit less expenses (and plus other income) = <b>net profit</b>.</li>
              <li><b>Statement of financial position:</b> assets less liabilities, with capital adjusted by profit and drawings.</li>
            </ul>

            <h3>2. Cost of goods sold</h3>
            <p>COGS = opening stock + net purchases − closing stock. Gross profit = net sales − COGS. Mark-up is on cost; margin is on selling price.</p>

            <h3>3. The adjustments gallery</h3>
            <ul>
              <li><b>Closing stock:</b> credit in trading account AND an asset in the balance sheet.</li>
              <li><b>Accrued expenses:</b> add to the expense; show as a liability.</li>
              <li><b>Prepaid expenses:</b> deduct from the expense; show as an asset.</li>
              <li><b>Bad debts written off</b> hit P&L; <b>provision for doubtful debts</b> is charged in P&L (increase) and deducted from debtors.</li>
              <li><b>Depreciation</b> charged to P&L, deducted from the asset (or added to provision).</li>
              <li><b>Owner's goods taken:</b> deduct from purchases, add to drawings.</li>
            </ul>
            <div class="worked"><b>Worked example:</b> Rent paid N120,000 covers 12 months but 2 months relate to next year. Expense in P&L = 120,000 × 10/12 = N100,000; prepayment N20,000 shown as a current asset. Wages N80,000 with N10,000 owing: expense N90,000; accrual N10,000 a current liability. Every adjustment touches BOTH the P&L and the balance sheet.</div>

            <h3>4. Capital account movement</h3>
            <p>Closing capital = opening capital + net profit − drawings (plus capital introduced). Forgetting drawings is the single most common final-accounts error.</p>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Putting closing stock only in the trading account — it is a double entry (asset too).</li>
              <li>Confusing mark-up (on cost) with margin (on sales).</li>
              <li>Omitting drawings from the capital account.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> for each adjustment ask "which two places?" — every adjustment lands in an income statement line AND a balance sheet item. Practise the pairings until reflexive.</div>
          `,
          cards: [
            { q: 'Trading account formula?', a: 'Net sales less cost of goods sold equals gross profit.' },
            { q: 'Cost of goods sold formula?', a: 'Opening stock plus net purchases less closing stock.' },
            { q: 'Gross profit less expenses gives…', a: 'Net profit (or loss), the result carried to the capital account.' },
            { q: 'Closing stock appears in which two places?', a: 'As a credit in the trading account and as a current asset in the balance sheet.' },
            { q: 'Accrued wages are treated how?', a: 'Added to the wages expense in P&L and shown as a current liability.' },
            { q: 'Prepaid rent is treated how?', a: 'Deducted from rent in P&L and shown as a current asset.' },
            { q: 'Rent N120,000 with 2 months prepaid — P&L charge?', a: 'N100,000, with the N20,000 prepayment as a current asset.' },
            { q: 'Mark-up versus margin?', a: 'Mark-up is profit on cost; margin is profit on selling price.' },
            { q: 'Bad debts written off go to…', a: 'The profit or loss account as an expense of the period.' },
            { q: 'Provision for doubtful debts (increase) is…', a: 'Charged in P&L and the provision deducted from debtors in the balance sheet.' },
            { q: 'Goods taken by the owner affect…', a: 'Purchases reduced in trading and drawings increased in the capital account.' },
            { q: 'Closing capital formula?', a: 'Opening capital plus net profit and capital introduced, less drawings.' },
            { q: 'Depreciation lands where?', a: 'As an expense in P&L and deducted from (or provided against) the asset in the balance sheet.' },
            { q: 'The most common final-accounts error?', a: 'Omitting drawings from the capital account — capital then overstates.' },
            { q: 'Every adjustment touches how many places?', a: 'Two — an income statement line and a balance sheet item.' },
          ],
          quiz: [
            { q: 'Gross profit equals…', options: ['sales less expenses', 'net sales less cost of goods sold', 'capital less drawings', 'purchases less sales'], correct: 1, exp: 'The trading account stops at gross profit.' },
            { q: 'COGS is…', options: ['opening stock + purchases − closing stock', 'sales − purchases', 'closing stock − opening stock', 'purchases + sales'], correct: 0, exp: 'Opening stock plus net purchases less closing stock.' },
            { q: 'Closing stock appears in…', options: ['trading account only', 'balance sheet only', 'both trading and balance sheet', 'P&L only'], correct: 2, exp: 'Credit in trading, asset in the statement of financial position.' },
            { q: 'Wages owing at year end are…', options: ['prepayments', 'accruals added to the expense', 'ignored', 'deducted from wages'], correct: 1, exp: 'Accrued wages increase the charge and sit as a liability.' },
            { q: 'Two months of next year\'s rent paid now create…', options: ['an accrual', 'a prepayment asset', 'a bad debt', 'a provision'], correct: 1, exp: 'Paid early, used later — an asset of N20,000 in the worked case.' },
            { q: 'Mark-up is profit measured on…', options: ['sales', 'cost', 'capital', 'assets'], correct: 1, exp: 'Mark-up on cost; margin on selling price.' },
            { q: 'Increase in provision for doubtful debts is…', options: ['an asset', 'a P&L charge', 'a liability', 'drawings'], correct: 1, exp: 'The increase is expensed; the provision deducts from debtors.' },
            { q: 'Owner taking goods for home requires…', options: ['no entry', 'purchases down, drawings up', 'sales up', 'capital up'], correct: 1, exp: 'The business loses stock; the owner\'s drawings grow.' },
            { q: 'Closing capital equals…', options: ['opening + profit − drawings', 'opening − profit', 'assets + liabilities', 'sales − expenses'], correct: 0, exp: 'Profit adds, drawings subtract, introduced capital adds.' },
            { q: 'Net profit is carried to…', options: ['the trading account', 'the capital account', 'suspense', 'bank'], correct: 1, exp: 'The income result closes into capital.' },
          ]
        },
        {
          title: 'Partnership Accounts',
          tags: ['Appropriation', 'Profit sharing', 'Current accounts'],
          summary: 'Sharing profit among partners — appropriation account, interest on capital and drawings, salaries, and current accounts.',
          content: `
            <h3>1. How partnerships differ</h3>
            <p>A partnership (2–20 owners, up to 50 for some professions under CAMA rules) keeps a <b>capital account</b> per partner, plus often a <b>current account</b> for profits, salaries, interest and drawings when capital is fixed. The <b>partnership deed</b> governs sharing.</p>

            <h3>2. The appropriation account</h3>
            <ul>
              <li>Starts with <b>net profit</b> from P&L.</li>
              <li>Adds <b>interest on drawings;</b> deducts <b>interest on capital</b> and <b>partners' salaries.</b></li>
              <li>The remainder is the <b>residual profit</b> shared in the agreed ratio.</li>
            </ul>

            <h3>3. Interest mechanics</h3>
            <p><b>Interest on capital</b> rewards capital contributed (e.g., 5% of capital). <b>Interest on drawings</b> charges partners for money taken early — often computed with time weighting when dates are given. Without agreement, the Partnership Act gives <b>no</b> interest on capital, equal shares, and no salaries.</p>
            <div class="worked"><b>Worked example:</b> Ada N100,000 capital, Bola N60,000; interest on capital 5%; salaries Ada N10,000; net profit N50,000; drawings interest N1,000 total. Appropriation: 50,000 + 1,000 − (8,000 interest on capital) − 10,000 salary = 33,000 residual, shared 1:1 = N16,500 each. Ada total: 5,000 + 10,000 + 16,500 = N31,500; Bola: 3,000 + 16,500 = N19,500. Show every line.</div>

            <h3>4. Current accounts and the balance sheet</h3>
            <p>Each partner's current account collects interest on capital, salary, profit share (credits) less drawings and interest on drawings (debits). Credit balances appear as equity; debit balances deduct. Capital accounts stay fixed unless changed.</p>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Treating interest on capital as an expense in P&L — it is an APPROPRIATION of profit.</li>
              <li>Sharing profit before completing all appropriations.</li>
              <li>Forgetting drawings interest is ADDED in the appropriation account.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> appropriation questions are pure arithmetic in a fixed order: net profit → + drawings interest → − capital interest − salaries → residual → ratio split. Keep the order and the marks follow.</div>
          `,
          cards: [
            { q: 'What document governs a partnership?', a: 'The partnership deed, setting profit ratios, interest rates, salaries and duties.' },
            { q: 'What does the appropriation account do?', a: 'Divides net profit among partners: interest, salaries, then residual in the agreed ratio.' },
            { q: 'Interest on capital is…', a: 'An appropriation of profit (not an expense), credited to each partner at the agreed rate.' },
            { q: 'Interest on drawings is…', a: 'Charged to partners and ADDED in the appropriation account.' },
            { q: 'Without a deed, the Partnership Act gives…', a: 'No interest on capital, no salaries, and equal profit sharing.' },
            { q: 'The residual profit is…', a: 'What remains after all appropriations, shared in the agreed profit ratio.' },
            { q: 'A partner\'s current account collects what?', a: 'Interest on capital, salary and profit share on the credit side; drawings and drawings interest on the debit side.' },
            { q: 'Why keep capital fixed with current accounts?', a: 'So movements of profit and drawings flow through current accounts, leaving capital stable.' },
            { q: 'A debit balance on a current account means…', a: 'The partner has taken more than his earnings — it deducts from equity.' },
            { q: 'Ada capital N100,000 at 5% interest earns…', a: 'N5,000 interest on capital for the year.' },
            { q: 'Salaries of partners appear where?', a: 'In the appropriation account, not as an expense of the profit or loss account.' },
            { q: 'Maximum partners in an ordinary partnership?', a: 'Twenty, with higher limits for professional firms like accountants and lawyers.' },
            { q: 'In the worked case, Ada\'s total appropriation?', a: 'N31,500 — interest N5,000 plus salary N10,000 plus residual share N16,500.' },
            { q: 'Order of the appropriation account?', a: 'Net profit, add drawings interest, deduct capital interest and salaries, split the residual.' },
            { q: 'Capital accounts in a fixed-capital scheme…', a: 'Stay unchanged unless partners introduce or withdraw capital permanently.' },
          ],
          quiz: [
            { q: 'Interest on capital is treated as…', options: ['an expense in P&L', 'an appropriation of profit', 'a liability', 'drawings'], correct: 1, exp: 'It divides profit; it is not an operating expense.' },
            { q: 'Interest on drawings is…', options: ['deducted in appropriation', 'added in appropriation', 'ignored', 'expensed in P&L'], correct: 1, exp: 'It is income of the firm added back before sharing.' },
            { q: 'Without a deed, profits are shared…', options: ['by capital', 'equally', 'by salaries', 'not at all'], correct: 1, exp: 'The default rule of the Partnership Act is equal sharing.' },
            { q: 'Salaries of partners are recorded in…', options: ['the trading account', 'the appropriation account', 'the cash book only', 'suspense'], correct: 1, exp: 'Salaries to partners are appropriations, not expenses.' },
            { q: 'The residual profit is shared…', options: ['equally always', 'in the agreed ratio', 'by drawings', 'by age'], correct: 1, exp: 'After all appropriations, the deed\'s ratio rules.' },
            { q: 'A current account records…', options: ['fixed capital only', 'profit share, interest, salaries and drawings', 'bank loans', 'creditors'], correct: 1, exp: 'It tracks each partner\'s running earnings against takings.' },
            { q: 'A debit current-account balance…', options: ['adds to equity', 'deducts from equity', 'is an asset', 'is income'], correct: 1, exp: 'Overdrawn partners reduce total equity.' },
            { q: '5% on N60,000 capital gives…', options: ['N6,000', 'N3,000', 'N5,000', 'N2,500'], correct: 1, exp: '0.05 × 60,000 = 3,000 interest on capital.' },
            { q: 'Ordinary partnerships cap at how many owners?', options: ['10', '20', '50', '100'], correct: 1, exp: 'Twenty, with higher limits for certain professions.' },
            { q: 'The appropriation account begins with…', options: ['gross profit', 'net profit from P&L', 'capital', 'sales'], correct: 1, exp: 'It distributes the net profit the P&L produced.' },
          ]
        },
        {
          title: 'Control Accounts & Self-Balancing Ledgers',
          tags: ['Sales control', 'Purchases control', 'Totals'],
          summary: 'How businesses check hundreds of personal accounts at once — the sales and purchases control accounts and where every figure comes from.',
          content: `
            <h3>1. Why control accounts exist</h3>
            <p>With hundreds of debtors and creditors, a trial balance can hide personal-ledger errors. A <b>control account</b> summarises the whole ledger using <b>totals</b> from the books of original entry — its closing balance should equal the <b>list of individual balances</b>.</p>

            <h3>2. Where the figures come from</h3>
            <ul>
              <li><b>Sales control (debtors control):</b> opening balance b/d; credit sales (sales day book); receipts from customers (cash book); discounts allowed; returns inwards (returns inwards book); irrecoverable debts; interest charged; dishonoured cheques; closing balance.</li>
              <li><b>Purchases control (creditors control):</b> opening balance; credit purchases (purchases day book); payments to suppliers; discounts received; returns outwards; contra/set-off; closing balance.</li>
            </ul>

            <h3>3. Contra entries</h3>
            <p>When a customer is also a supplier, the business may <b>set off</b> the amounts — the contra appears on the credit side of the sales control and the debit side of the purchases control.</p>
            <div class="worked"><b>Worked example:</b> Sales control: opening debtors N40,000; credit sales N220,000; cash received N180,000; discounts allowed N4,000; returns inwards N6,000. Closing = 40,000 + 220,000 − 180,000 − 4,000 − 6,000 = <b>N70,000</b>. If the list of debtor balances totals N70,000, the ledger is in control.</div>

            <h3>4. Uses and limits</h3>
            <ul>
              <li>Quick check on ledger clerks; speeds final accounts; deters fraud; isolates errors to one ledger.</li>
              <li>Limitation: it checks totals, not individual postings — a wrong personal account inside a correct total still hides.</li>
            </ul>

            <h3>5. Common mistakes that cost marks</h3>
            <ul>
              <li>Putting returns inwards in the purchases control (it belongs to sales control).</li>
              <li>Forgetting contra on both control accounts.</li>
              <li>Using cash sales in the sales control — only CREDIT sales belong there.</li>
            </ul>
            <div class="tip"><b>Exam tip:</b> draw the T-account skeleton first (debits left, credits right for the sales control), then drop figures in as you read the question — skeleton-first prevents side errors.</div>
          `,
          cards: [
            { q: 'What does a control account do?', a: 'Summarises a whole personal ledger using totals, checking it against the list of balances.' },
            { q: 'The sales control account is fed by…', a: 'The sales day book, cash book receipts, returns inwards book and discount columns.' },
            { q: 'Credit sales appear on which side of sales control?', a: 'The debit side, because they increase what debtors owe.' },
            { q: 'Cash received from customers sits on…', a: 'The credit side of the sales control, reducing debtors.' },
            { q: 'Discounts allowed go to…', a: 'The credit side of the sales control.' },
            { q: 'Returns inwards belong to…', a: 'The sales control account, on the credit side.' },
            { q: 'A contra entry is…', a: 'A set-off where one party is both customer and supplier, entered in both control accounts.' },
            { q: 'Contra appears where in the sales control?', a: 'On the credit side; in the purchases control on the debit side.' },
            { q: 'Worked closing debtors figure?', a: 'N70,000 — 40,000 + 220,000 − 180,000 − 4,000 − 6,000.' },
            { q: 'The control account should equal…', a: 'The total of the list of individual personal balances.' },
            { q: 'Three uses of control accounts?', a: 'Speeding final accounts, checking clerks, deterring fraud and locating errors in one ledger.' },
            { q: 'Key limitation of control accounts?', a: 'They verify totals only — a mis-posted personal account inside a correct total stays hidden.' },
            { q: 'Cash sales belong in the sales control?', a: 'No — only credit sales pass through the debtors control account.' },
            { q: 'Irrecoverable debts written off appear…', a: 'On the credit side of the sales control, removing the balance.' },
            { q: 'Purchases control credit-side items include…', a: 'Payments to suppliers, discounts received, returns outwards and contra set-offs.' },
          ],
          quiz: [
            { q: 'A control account checks…', options: ['each posting', 'totals of a personal ledger', 'the cash box', 'stock levels'], correct: 1, exp: 'It reconciles the ledger\'s totals to the list of balances.' },
            { q: 'Credit sales enter the sales control on the…', options: ['credit side', 'debit side', 'both', 'neither'], correct: 1, exp: 'They increase debtors — debit side.' },
            { q: 'Returns inwards are credited in…', options: ['purchases control', 'sales control', 'cash book', 'capital'], correct: 1, exp: 'Goods coming back reduce what customers owe.' },
            { q: 'Discounts received belong to…', options: ['sales control credit', 'purchases control debit', 'purchases control credit', 'trading account'], correct: 1, exp: 'They reduce what the business owes suppliers — debit in purchases control.' },
            { q: 'A set-off between customer and supplier is a…', options: ['contra entry', 'bad debt', 'prepayment', 'suspense'], correct: 0, exp: 'Contra entries appear in both control accounts on opposite sides.' },
            { q: 'Cash sales pass through the sales control…', options: ['always', 'never', 'when large', 'when credited'], correct: 1, exp: 'Only credit sales create debtor balances.' },
            { q: 'Closing debtors 40k + sales 220k − receipts 180k − discounts 4k − returns 6k =', options: ['N60,000', 'N70,000', 'N80,000', 'N66,000'], correct: 1, exp: '40 + 220 − 180 − 4 − 6 = 70 thousand naira.' },
            { q: 'If the control balance differs from the list…', options: ['the list is always right', 'an error exists somewhere in that ledger', 'both are right', 'the bank erred'], correct: 1, exp: 'Disagreement proves a ledger error; agreement suggests control.' },
            { q: 'A key fraud-deterrent feature is…', options: ['hiding totals', 'independent totals vs personal postings', 'single clerk', 'no records'], correct: 1, exp: 'Different people keep the control and personal ledgers, cross-checking each other.' },
            { q: 'Irrecoverable debt written off is…', options: ['debited', 'credited in sales control', 'ignored', 'a drawing'], correct: 1, exp: 'Writing off removes the debtor — credit side.' },
          ]
        }
      ]

    },
    resources: [
      { cat: 'Past questions', title: 'Myschool — Financial Accounting past questions', url: 'https://myschool.ng/classroom', note: 'Past WASSCE/UTME accounting objectives and problems.' },
      { cat: 'Reference', title: 'Wikipedia — Double-entry bookkeeping', url: 'https://en.wikipedia.org/wiki/Double-entry_bookkeeping', note: 'Why every debit has a credit.' },
      { cat: 'Structured course', title: 'Khan Academy — Accounting', url: 'https://www.khanacademy.org/college-careers-more/finance-capital-markets', note: 'The accounting equation and statements, gently.' },
      { cat: 'Video lesson', title: 'WAEC Financial Accounting revision', url: 'https://www.youtube.com/results?search_query=waec+financial+accounting+revision', note: 'Journals, ledgers and trial balances.' }
    ]
  
};
