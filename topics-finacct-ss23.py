#!/usr/bin/env python3
"""Insert Financial Accounting SS2 + SS3 (3 topics each) into index.html CURRICULUM. RUN ONCE."""
import sys

P = 'index.html'
s = open(P, encoding='utf-8').read()

assert "title: 'Ledgers, Trial Balance & the Double-Entry Machine'" not in s, 'already applied — do not re-run'

T1 = """      SS2: [
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
      ]"""

i = s.index("  'Financial Accounting': {")
j = s.index('    resources: [', i)
k = s.rindex('      ]', i, j)
tail = s[k+7:]
if tail.startswith(','):
    tail = tail[1:]
s = s[:k] + '      ],\n' + T1.strip('\n') + '\n' + tail

open(P, 'w', encoding='utf-8').write(s)
print('finacct ss2+ss3 inserted')
