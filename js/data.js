const courses = [
  {
    id: 'basic-computer',
    title: 'ជំនាញកុំព្យូទ័រមូលដ្ឋាន',
    subtitle: 'រៀនពីការផ្លាស់ប្ដូរទៅកាន់មូលដ្ឋានទូទៅនៃកុំព្យូទ័រ',
    icon: '💻',
    level: 'កម្រិតដំបូង',
    duration: '4-5 ព្រឹក្សាម៉ោង',
    lessons: [
      { id: 'basic-1', title: 'តើកុំព្យូទ័រគឺជាអ្វី?', objective: 'យល់ពីនិយមន័យ និងការប្រើប្រាស់កុំព្យូទ័រ', explanation: 'កុំព្យូទ័រគឺជាសម្ភារៈអេឡិចត្រូនិកដែលអាចដំណើរការការគណនា និងរក្សាទុកព័ត៌មាន។ នៅក្នុងជីវិតប្រចាំថ្ងៃ កុំព្យូទ័រអាចប្រើសម្រាប់រៀន សរសេរ ផ្ញើអ៊ីមែល ការងារសាលា និងធ្វើការងារសាជីវកម្ម។ ពួកគេអាចធ្វើការជាមួយទិន្នន័យបានលឿន និងត្រឹមត្រូវជាងការធ្វើដោយដៃ។', steps: [
        'ស្វែងយល់ពីអត្ថន័យ: កុំព្យូទ័រ គឺជាសំណុំឧបករណ៍ដែលអាចចម្លងទិន្នន័យ ធ្វើការគណនា និងអនុវត្តកម្មវិធី។',
        'ស្វែងយល់ពីការប្រើប្រាស់ក្នុងការសិក្សា៖ សម្រាប់កែអត្ថបទ ស្វែងរកព័ត៌មាន និងធ្វើកិច្ចការ។',
        'ស្វែងយល់ពីការប្រើប្រាស់ក្នុងការងារ និងក្នុងផ្ទះ៖ សម្រាប់អនុវត្តកម្មវិធី ការគណនារំពឹងទុក និងសារភាព។'
      ], example: 'សិស្សម្នាក់អាចប្រើកុំព្យូទ័រដើម្បីដាក់សំណួរ កែសម្រួលឯកសារ និងធ្វើកិច្ចការសិក្សា។', tips: ['និយាយយ៉ាងសាមញ្ញថា កុំព្យូទ័រវាជាមជ្ឈដ៏មានប្រយោជន៍ក្នុងការសិក្សា។', 'អ្នកគួរយល់ពីភាពខុសគ្នារវាង hardware និង software។'], mistakes: ['មិនគួរគិតថា កុំព្យូទ័រត្រឹមតែជាការគណនា។', 'មិនគួរប្រកាន់ន័យថា software និង hardware គឺដូចគ្នា។'], exercise: ['ឈ្មោះបែបនៃការប្រើប្រាស់កុំព្យូទ័រដែលអ្នកចូលចិត្តនៅក្នុងសាលា។', 'រៀបរាប់ភាគី ៣ ដែលធ្វើអោយកុំព្យូទ័រ មានប្រយោជន៍។'] },
      { id: 'basic-2', title: 'ស្គាល់ផ្នែកសំខាន់ៗរបស់កុំព្យូទ័រ', objective: 'ស្គាល់ឧបករណ៍ចម្បងនិងមុខងាររបស់វា', explanation: 'កុំព្យូទ័រមានផ្នែកសំខាន់ៗដូចជា monitor, keyboard, mouse, CPU, speakers, printer, webcam, USB, headphones។ នីមួយៗមានមុខងារជាក់លាក់។ Monitor បង្ហាញព័ត៌មាន។ Keyboard អាចវាយអក្សរ។ Mouse អាចជ្រើសរើស និងផ្លាស់ទី។ CPU ជាមជ្ឈងារគណនាប្រកបដោយទំនាក់ទំនង។', steps: [
        'Monitor: អេក្រង់ដែលបង្ហាញអត្ថបទ និងរូបភាព។',
        'Keyboard:ក្ដារចុចសម្រាប់វាយអក្សរ និងបញ្ជា។',
        'Mouse:ប្រើដើម្បីចុច និងផ្ទាំង។',
        'CPU: ធ្វើការរក្សាទុក និងដំណើរការកម្មវិធី។'
      ], example: 'នៅពេលអ្នកចុចលើ symbol ដើម្បីបើកកម្មវិធី Mouse និង keyboard បង្កើនប្រសិទ្ធភាព។', tips: ['ចំណាំឈ្មោះជាភាសាខ្មែរនៃឧបករណ៍ចម្បង។', 'សិក្សានូវមុខងារដែលទាក់ទងទៅនឹងការងារ។'], mistakes: ['មិនអាចច្រឡំស្មុគស្មាញរវាង CPU និង monitor បាន។'], exercise: ['កំណត់ឧបករណ៍មួយដែលអាចជួយអ្នកសរសេរ។', 'បញ្ជាក់ឧបករណ៍ដែលអាចបោះពុម្ពឯកសារ។'] },
      { id: 'basic-3', title: 'របៀបបើក និងបិទកុំព្យូទ័រ', objective: 'រៀនការបើក កំណត់ហ្សិន និងបិទកុំព្យូទ័រដោយបានត្រឹមត្រូវ', explanation: 'ដើម្បីបើកកុំព្យូទ័រ អ្នកត្រូវចុចប៊ូតុង Power របស់កុំព្យូទ័រ និងចូលទៅកាន់ Windows។ បន្ទាប់មក អ្នកអាចធ្វើការងារសិក្សា។ នៅពេលបិទ កុំប្រើ Power button ដោយបិទភ្លាមៗជានិច្ច ទេ ព្រោះអាចបាត់បង់ឯកសារ និងប៉ះពាល់ដល់ระบบ។', steps: [
        'ចុចប៊ូតុង Power ហើយរង់ចាំអេក្រង់ឆាប់។',
        'វាយពាក្យសម្ងាត់កាលណា ត្រូវការចូលប្រើ។',
        'ពិនិត្យ Start menu, desktop និង taskbar។',
        'បិទដោយជំហាន Start > Shut down ឬ Restart និង Sleep ក្រៅពីការបិទដោយចុច Power។'
      ], example: 'ប្រសិនបើអ្នកធ្វើបានចំនួន 5 ដំណាក់កាលនេះ អ្នកនឹងចូលបានដល់ Desktop ដែលមាន symbol ឥតគិតថ្លៃ។', tips: ['បិទដោយ Start menu ជៀសវាងការបាត់បង់ឯកសារ។', 'ប្រើ Restart ពេលកម្មវិធីមិនធ្វើការ។'], mistakes: ['កុំបិទដោយដកថាមពលភ្លាមៗ។', 'កុំចាកចេញដោយមិន Save ឯកសារ។'], exercise: ['ប្រាប់ពីរបៀបបិទកុំព្យូទ័រត្រឹមត្រូវ។', 'និយាយពីភាពខុសគ្នារវាង Restart និង Sleep ។'] },
      { id: 'basic-4', title: 'ការប្រើប្រាស់ Mouse', objective: 'ស្គាល់មុខងាររបស់កណ្ដុរ', explanation: 'Mouse ជាឧបករណ៍សម្រាប់ផ្ទេរកursor ដៅលើអេក្រង់។ Mouse អាចប្រើ Left click, Right click, Double click, Drag and drop, Scroll, Select និង Context menu ។', steps: [
        'Left click: ជ្រើសរើស ឬបើកវត្ថុ។',
        'Right click: បង្ហាញ menu ល្បី។',
        'Double click: បើកកម្មវិធី ឬឯកសារ។',
        'Drag and drop: យកឯកសារទៅថតផ្សេង។'
      ], example: 'អ្នកអាចចុចលើ folder បើករួច ដើម្បីចម្លងទៅថតផ្សេង។', tips: ['ប្រើ Scroll ដើម្បីរំកិល។', 'យក cursor ត្រង់ជួរដើម្បីចុចពីរដង។'], mistakes: ['កុំចុចអារម្មណ៍ច្រើនពេក។', 'កុំយក mouse យ៉ាងជិតឆ្ងាយ។'], exercise: ['ចុចខាងឆ្វេងដើម្បីជ្រើសរើសអត្ថបទ។', 'ប្រើ drag and drop ដើម្បីផ្លាស់ទីឯកសារ។'] },
      { id: 'basic-5', title: 'ការប្រើប្រាស់ Keyboard', objective: 'ស្គាល់គ្រាប់ចុច និងរបៀបវាយអក្សរ', explanation: 'ក្ដារចុចមានអក្សរ លេខ និងផាកចុចពិសេស។ អ្នកត្រូវស្គាល់កន្លែងរបស់សញ្ញា Enter, Space, Backspace, Delete, Shift, Caps Lock, Tab, Ctrl, Alt, Arrow keys, Windows key ។', steps: [
        'វាយអក្សរបានតាមជួរដេក។',
        'ប្រើ Shift ដើម្បីវាយអក្សរធំ។',
        'Ctrl + C, Ctrl + V, Ctrl + S មានប្រយោជន៍។',
        'Windows key បើក Start menu មួយ។'
      ], example: 'ប្រសិនបើអ្នកចាប់ផ្តើមវាយអត្ថបទក្នុង Word អ្នកប្រើ Space ដើម្បីចន្លោះពាក្យ។', tips: ['សាកល្បង Keyboard shortcuts ជាប់ជាប្រចាំ។', 'សិក្សារបៀបដាក់ម្រាមដៃ។'], mistakes: ['កុំបិទ Caps Lock ដោយមិនដឹងថា។'], exercise: ['រៀបរាប់ shortcut ទី 3 ដែលអ្នកចូលចិត្ត។', 'ចុច Backspace និង Delete ត្រូវកន្លែង។'] },
      { id: 'basic-6', title: 'Desktop និង Windows', objective: 'ស្វែងយល់អំពី desktop និង taskbar', explanation: 'Desktop គឺជាផ្ទាំងធំពៅសម្រាប់ធ្វើការរួមនឹង icon និង window។ Taskbar បង្ហាញកម្មវិធីដែលកំពុងដំណើរការ។ Start menu គឺជាផ្ទះរបស់កម្មវិធី។ Search អាចរកឯកសារ និងកម្មវិធី។', steps: [
        'មើល taskbar ឆាប់ៗ។',
        'បើកកម្មវិធីពី Start menu។',
        'Minimize, Maximize, Resize window។',
        'Search ឯកសារ ឬកម្មវិធី។'
      ], example: 'អ្នកអាចធ្វើរបៀបព្យាបាលតាម taskbar ដោយដាក់ application ក្នុងពេលលើកច្រើន។', tips: ['ពិនិត្យ Start menu និង Search ដើម្បីរកឧបករណ៏។'], mistakes: ['កុំធ្វើការ over cluttered desktop ធ្វើឱ្យខូច។'], exercise: ['បើកកម្មវិធី Notepad ឬ Word។', 'Minimize និង Maximize window ។'] },
      { id: 'basic-7', title: 'ការបង្កើត និងគ្រប់គ្រង Folder', objective: 'បង្កើតថតឯកសារអោយបានប្រកបដោយប្រព័ន្ធ', explanation: 'Folder ឬថត ជារូបធាតុដែលកន្លែងអង្គក្សបទ និងឯកសារអាចរក្សាទុក។ Folder សម្រាប់ណែនាំអោយមានប្រភេទ ហៀបណា ការសិក្សា ការងារ និងឯកសារបទបង្ហាញ។', steps: [
        'Right click > New > Folder',
        'ដាក់ឈ្មោះថតដែលស្រួលយល់។',
        'Move, copy, rename, delete folders។'
      ], example: 'ថត "សិក្សា" អាចមានថត "Word" និង "Excel" ជាកូន។', tips: ['ដាក់ឈ្មោះថតយ៉ាងច្បាស់ និងឆ្លាត។'], mistakes: ['កុំដាក់ឈ្មោះមិនសម្រួល។'], exercise: ['បង្កើតថត "កិច្ចការសាលា"។', 'ចម្លងថតទៅទីតាំងផ្សេង។'] },
      { id: 'basic-8', title: 'ការគ្រប់គ្រងឯកសារ', objective: 'រៀនអំពីឯកសារ ទីតាំង និងរបៀបរក្សាទុក', explanation: 'ឯកសារកាន់តែមានលក្ខណៈដូចជា .docx, .xlsx, .pptx, .pdf, .jpg, .mp4។ File extension បង្ហាញប្រភេទឯកសារ។', steps: [
        'បើកឯកសារ',
        'រក្សាទុកឯកសារ',
        'ប្ដូរឈ្មោះ',
        'Search ឯកសារ'
      ], example: 'ឯកសារ "សិក្សា.docx" មាន extension .docx ត្រូវបានបើកដោយ Word។', tips: ['ស្វែងរកឯកសារដោយឈ្មោះ ឬ extension។'], mistakes: ['កុំលុបដោយមិនស្រាប់។'], exercise: ['ប្ដូរឈ្មោះឯកសារដោយត្រឹមត្រូវ។', 'រកឯកសារដែលអ្នកកំពុងធ្វើ។'] },
      { id: 'basic-9', title: 'ការដំឡើង និងលុបកម្មវិធី', objective: 'ដំឡើង និងលុបកម្មវិធីដោយសុវត្ថិភាព', explanation: 'ការដំឡើងកម្មវិធីរបស់អ្នកឱ្យបានត្រឹមត្រូវ អាចធ្វើតាម installer ហើយជ្រើសរើសប្រកបដោយលទ្ធភាព។ ការលុបកម្មវិធីគួរធ្វើដោយប្រើ Settings > Apps ក្នុង Windows។', steps: [
        'បើក Settings',
        'ចូល Apps',
        'ជ្រើសរើសកម្មវិធី',
        'Uninstall និងកត់ត្រា'
      ], example: 'លោកគ្រូអាចដំឡើង Microsoft Office។', tips: ['ប្រើ installer ពីប្រភពដែលជឿទុកចិត្ត។'], mistakes: ['កុំដំឡើងកម្មវិធីពីតំណដែលមិនស្ប뢰។'], exercise: ['ពិពណ៌នាអំពីមូលហេតុដែលអ្នកមិនគួរទាញយកកម្មវិធីពី website មិនសម្ងាត់។'] },
      { id: 'basic-10', title: 'ការប្រើប្រាស់ USB Flash Drive', objective: 'ចម្លង និងរក្សាទុកឯកសារនៅលើ USB', explanation: 'USB flash drive គឺជាឧបករណ៍ផ្ទុកទិន្នន័យដែលតូច និងសាមញ្ញ។ អ្នកអាចចម្លងឯកសារ ទៅ USB ហើយបានត្រឹមត្រូវ។', steps: [
        'ភ្ជាប់ USB',
        'រកឯកសារ USB drive',
        'Copy / Move',
        'Eject safely'
      ], example: 'អ្នកអាចចម្លងឯកសារសាលា ទៅ USB ដើម្បីយកទៅផ្ទះ។', tips: ['កុំដក USB នៅពេលកំពុងសរសេរ។'], mistakes: ['កុំបិទមិនបាន eject safely។'], exercise: ['បញ្ជាក់របៀប eject USB ឱ្យបានសុវត្ថិភាព។'] },
      { id: 'basic-11', title: 'ការបោះពុម្ពឯកសារ', objective: 'នាំឯកសារទៅបោះពុម្ពដោយបានត្រឹមត្រូវ', explanation: 'ការបោះពុម្ពឯកសារជាជំហានសំខាន់ក្នុងការបង្កើតឯកសារសម្រាប់កិច្ចការ និងសាលា។ អ្នកអាចជ្រើសរើស printer, preview, copies, pages and orientation.', steps: [
        'ទាញចេញឯកសារ',
        'ក្រិតព្រីន',
        'ជ្រើសរើស printer',
        'ប្រើ print preview'
      ], example: 'នៅពេលបោះពុម្ពកិច្ចការសាលា អ្នកគួរកំណត់ page size និង copies។', tips: ['ពិនិត្យ Print Preview ជាប្រចាំ។'], mistakes: ['កុំបោះពុម្ពដោយមិនពិនិត្យ page size។'], exercise: ['បញ្ជាក់អ្វីខ្លះដែលអ្នកគួរកំណត់មុនបោះពុម្ព។'] },
      { id: 'basic-12', title: 'ការថែទាំកុំព្យូទ័រមូលដ្ឋាន', objective: 'ទទួលយកការថែទាំ និងសុវត្ថិភាព', explanation: 'កុំព្យូទ័រ គួរតែត្រូវបានថែទាំជាប្រចាំ ដើម្បីធានាថាបានប្រើបានយូរ និងមានឯកសារថ្មី។ includes cleaning, updates, storage, safe downloads, antivirus basics.', steps: [
        'រក្សាសភាពស្អាតនៃ monitor និង keyboard',
        'ធ្វើ Updates',
        'ធ្វើទំនាក់ទំនង antivirus',
        'មិនទាញយកឯកសារមិនសម្ងាត់'
      ], example: 'កុំធ្វើការទាញយក file จาก website ដែលមិនស្គាល់។', tips: ['រក្សាចំនួនឯកសារមិនលើស។', 'ធ្វើ updates ជាប្រចាំ។'], mistakes: ['កុំរក្សាទុក installer ពុំសុវត្ថិភាព។'], exercise: ['រៀបរាប់ ៣ ជំហានសុវត្ថិភាពអ៊ីនធឺណិត។'] }
    ],
    project: 'រៀបចំ Folder សម្រាប់ការសិក្សារបស់អ្នក',
    completedDescription: 'អ្នកបានសម្រេចសិក្សាជំនាញកុំព្យូទ័រមូលដ្ឋាន។'
  },
  {
    id: 'typing',
    title: 'ជំនាញវាយអក្សរ',
    subtitle: 'បង្កើនល្បឿន និងភាពត្រឹមត្រូវក្នុងការវាយអក្សរ',
    icon: '⌨️',
    level: 'កម្រិតដំបូង',
    duration: '2-3 ព្រឹក្សាម៉ោង',
    lessons: [
      { id: 'typing-1', title: 'ស្គាល់ Keyboard', objective: 'ស្គាល់ layout និងមុខងារក្តារចុច', explanation: 'ក្តារចុចមានបន្ទះលេខ អក្សរ និងកាបូបពិសេស។ ការស្គាល់ទីតាំងគ្រាប់ចុចធ្វើឱ្យអ្នកវាយអក្សរបានលឿន និងកើតភាពជំនាញ។', steps: ['សម្គាល់ key letter', 'សម្គាល់ number', 'សម្គាល់ function keys.'], example: 'Keyboard QWERTY ជាការរៀបចំទូទៅ។', tips: ['មើល keyboard ដើម្បីស្គាល់ទីតាំង។'], mistakes: ['កុំក្រឡែអក្សរពីគំនិត។'], exercise: ['បង្ហាញ key A, S, D, F, J, K, L.'] },
      { id: 'typing-2', title: 'ទីតាំងម្រាមដៃ', objective: 'យល់ពីការដាក់ម្រាមដៃសម្រាប់ keyboard', explanation: 'ម្រាមដៃត្រូវដាក់លើ key home row។ ការដាក់ម្រាមដៃត្រឹមត្រូវធ្វើអោយវាយអក្សរបានទៀងទាត់គ្មានការអន្តរាយ។', steps: ['ដាក់ម្រាមដៃនៅ home row', 'ប្រើนิ้วសំលេង', 'យកធ្វើដោយអន្ដរាស'], example: 'ម្រាមដៃស្វាមសម្រាប់ index finger នៅ key F J។', tips: ['ដាក់ម្រាមដៃដោយត្រជាក់។'], mistakes: ['កុំផ្លាស់ទីម្រាមដៃរាល់ពេល។'], exercise: ['ហៅ key home row: ASDF JKL;'] },
      { id: 'typing-3', title: 'Home Row', objective: 'រៀនថា Home row ជាកន្លែងសំខាន់', explanation: 'Home row គឺជាក្រុម key ដែលអ្នកត្រូវចាប់ផ្តើមវាយអក្សរ។', steps: ['Home row A S D F G H J K L ;'], example: 'ចាប់ពី A S D F សម្រាប់ left hand។', tips: ['សាកល្បងយកកន្លែងកាន់ចុច។'], mistakes: ['កុំវាយដោយគ្មានការ balance.'], exercise: ['វាយ A S D F G H J K L ;'] },
      { id: 'typing-4', title: 'វាយអក្សរដោយមិនមើល Keyboard', objective: 'នឹងការវាយដោយមិនមើល keyboard', explanation: 'ការវាយដោយមិនមើល keyboard គឺជាជំនាញដែលអាចរីកចម្រើនដោយសីលធម៌។', steps: ['ផ្តោតទៅលើអត្ថបទ', 'វាយដោយអង្កាំ', 'រក្សាស្ថានភាព'], example: 'អ្នកអាចសរសេរអត្ថបទមួយប្រយោគដោយមើលអេក្រង់។', tips: ['ទទួលបានភាពស្រួលក្នុងការវាយ។'], mistakes: ['កុំបារម្ភរាល់ពេល។'], exercise: ['វាយក្របា 10 ពាក្យដោយមិនមើល keyboard.'] },
      { id: 'typing-5', title: 'វាយពាក្យ', objective: 'វាយពាក្យដោយរបៀបត្រឹមត្រូវ', explanation: 'ពាក្យសាមញ្ញអាចបង្កើតភាពទាក់ទាញ។', steps: ['ត្រៀមពាក្យ', 'វាយដោយចលនាបន្ត', 'ពិនិត្យ miss'], example: 'កុំសរសេរក្មេងទេ ។', tips: ['ចំណាយពេល 5-10 នាទី។'], mistakes: ['កុំរំភើបមិនគួរ។'], exercise: ['វាយពាក្យ ខាងក្រៅ ជាអក្សរក្រហម។'] },
      { id: 'typing-6', title: 'វាយប្រយោគ', objective: 'សរសេរប្រយោគប្រកបដោយស្របវិធាន', explanation: 'ប្រយោគឱ្យមានសុពលភាព។', steps: ['សិក្សាខ្លឹមសាររស់រាំ', 'វាយដោយក្តីសុខ', 'ពិនិត្យ'], example: 'ខ្ញុំចង់រៀនច្រើនដើម្បីមាន future.', tips: ['ចំណាយពេលនា'], mistakes: ['កុំភ្លឿនលើកវិញ'], exercise: ['វាយប្រយោគ 3-4 ជួរដែ'] },
      { id: 'typing-7', title: 'វាយលេខ', objective: 'សិក្សាលេខ keyboard', explanation: 'ការវាយលេខត្រូវប្រើ keyboard number row។', steps: ['អាន top row', 'អង្គជំនាញ'], example: '1234567890', tips: ['កុំទទួលខុស'], mistakes: ['កុំឡើងមិនសម'], exercise: ['វាយលេខ 1-10'] },
      { id: 'typing-8', title: 'វាយសញ្ញា', objective: 'វាយសញ្ញាដូចជា comma dot semicolon', explanation: 'សញ្ញារអ្នកត្រូវដឹងប្រយោជន៍ក្នុងការសរសេរ។', steps: ['សញ្ញាភ្ជាប់น', 'កំដៅ'], example: '.,?!;:', tips: ['សាកល្បងឆាប់'], mistakes: ['កុំឆ្ងាញ'], exercise: ['វាយអត្ថបទ 3 ពាក្យជា sentence.'] },
      { id: 'typing-9', title: 'Keyboard shortcuts', objective: 'សិក្សាអំពី shortcut', explanation: 'Keyboard shortcut ជួយបង្កើនល្បឿន។', steps: ['Ctrl + C', 'Ctrl + V', 'Ctrl + S'], example: 'Ctrl+S រក្សាទុកឯកសារ', tips: ['សិក្សារួចរាល់'], mistakes: ['កុំមិនប្រើ'], exercise: ['បង្ហាញ shortcut 5 ក្រុម.'] },
      { id: 'typing-10', title: 'ការវាយលឿន និងត្រឹមត្រូវ', objective: 'បង្កើនល្បឿន និងកាត់កំហុស', explanation: 'ល្បឿន និងភាពត្រឹមត្រូវមិនត្រូវបានបង្កើនដោយចុចលឿនចុះប៉ុន្តែដោយគំនិត។', steps: ['វាយឆាប់តាមរបៀប', 'ពិនិត្យ miss', 'អនុវត្តជាបន្ត'], example: 'និយាយអំពី WPM និង accuracy.', tips: ['ធ្វើស្រាវជ្រាវជាប្រចាំ'], mistakes: ['កុំបារម្ភច្រើន'], exercise: ['ប្រើ typing test 1 នាទី.'] }
    ],
    project: 'វាយអត្ថបទដោយរក្សាភាពត្រឹមត្រូវ',
    completedDescription: 'អ្នកបានរៀនស្តីពី keyboard និង typing skill.'
  },
  {
    id: 'word',
    title: 'Microsoft Word',
    subtitle: 'បង្កើតឯកសារវិជ្ជាជីវៈ និងឯកសារសាលា',
    icon: '📝',
    level: 'កម្រិតមធ្យម',
    duration: '5-6 ព្រឹក្សាម៉ោង',
    lessons: [
      { id: 'word-1', title: 'ស្គាល់ Microsoft Word', objective: 'យល់ពីមុខងារ និងអត្ថប្រយោជន៍របស់ Word', explanation: 'Microsoft Word ជាកម្មវិធីសរសេរ និងកែសម្រួលឯកសារ។ វាអនុញ្ញាតឱ្យអ្នកធ្វើឯកសារសិក្សា ឯកសារគ្រប់គ្រង ធ្វើ CV និងលិខិតផ្លូវការ។', steps: ['បើក Word', 'រកសាលា', 'បង្កើត new document'], example: 'ដាក់ heading សម្រាប់ report.', tips: ['សាកសួរ template'], mistakes: ['កុំបន្ទាប់ពីរ', 'កុំលើកចូល'], exercise: ['រៀបរាប់ 3 សកម្មភាពក្នុង Word'] },
      { id: 'word-2', title: 'បើក Word និងបង្កើតឯកសារថ្មី', objective: 'បើក Word និងសរសេរឯកសារថ្មី', explanation: 'ដើម្បីបង្កើតឯកសារថ្មី នៅលើ Start menu បើក Microsoft Word។ បន្ទាប់ពីនោះ អ្នកអាចសរសេរអត្ថបទ។', steps: ['បើក Word', 'ចុច Blank document', 'វាយអត្ថបទ'], example: 'Word អាចប្រើដើម្បីចូលរួមនឹងកិច្ចការ។', tips: ['រក្សាទុកជាប្រចាំ'], mistakes: ['កុំប្រើ template'], exercise: ['បង្កើតឯកសារ 3 បន្ទាត់'] },
      { id: 'word-3', title: 'ស្គាល់ Word Interface', objective: 'ស្គាល់ ribbon, toolbar and quick access', explanation: 'Word interface មាន Ribbon, title bar, quick access toolbar, ruler, status bar។ សាក្សាល់ interface ធ្វើអោយអ្នកស្វាងយល់កម្មវិធី។', steps: ['Title bar', 'Ribbon', 'Ruler', 'Status bar'], example: 'Ribbon មាន tab Home, Insert, Design, Layout។', tips: ['សិស្សអាចយល់ពី tab Home'], mistakes: ['កុំស្រាវជ្រាវ ra'], exercise: ['បញ្ជាក់ tab Home និង Insert.'] },
      { id: 'word-4', title: 'វាយអត្ថបទ', objective: 'សរសេរអត្ថបទដោយប្រកបដោយរបៀប', explanation: 'អ្នកគួរវាយអត្ថបទដោយចាប់ផ្តើមពី heading, paragraphs, lists និង spacing។', steps: ['វាយ heading', 'វាយ paragraph', 'កែសម្រួល'], example: 'អត្ថបទក្នុង report គួរទីករបៀបបានយ៉ាងច្បាស់។', tips: ['ប្រើ paragraph spacing'], mistakes: ['កុំសរសេរធំទេ'], exercise: ['សរសេរបទបង្ហាញ 5 បន្ទាត់'] },
      { id: 'word-5', title: 'Save និង Save As', objective: 'រក្សាទុកឯកសារដោយបានត្រឹមត្រូវ', explanation: 'ការរក្សាទុកឯកសារ គឺជាជំហានសំខាន់នៅពេលអ្នកធ្វើការលើឯកសារ។ Save ថ្មីសម្រាប់រក្សាទុកឡើយ។ Save As ប្រើពេលប្តូរឈ្មោះ ឬទីតាំង។', steps: ['ចុច File', 'ជ្រើស Save', 'ជ្រើសទីតាំង', 'វាយឈ្មោះឯកសារ', 'ចុច Save'], example: 'កិច្ចការ "report1.docx"', tips: ['រក្សាទុកជាប្រចាំ'], mistakes: ['កុំបាត់ទិន្នន័យ'] , exercise: ['បញ្ជាក់ភាពខុសគ្នារវាង Save និង Save As'] },
      { id: 'word-6', title: 'Open document', objective: 'បើកឯកសារ និងកែសម្រួល', explanation: 'ឯកសារចាស់អាចត្រូវបានបើក via File > Open. ពេញលេញមើលរបៀបកែសម្រួល។', steps: ['File > Open', 'ជ្រើសឯកសារ', 'កែសម្រួល'], example: 'ចូលទៅកាន់ Documents', tips: ['ស្វែងរកតាមឈ្មោះ'], mistakes: ['កុំសរសេរ over existing'], exercise: ['បើកឯកសារ Word ទីពីរ'] },
      { id: 'word-7', title: 'Select text', objective: 'ជ្រើសរើសអត្ថបទ', explanation: 'ការជ្រើសរើសអត្ថបទធ្វើឱ្យអ្នកអាចកែប្រែ, copy, delete, format.', steps: ['Drag mouse', 'Double click word', 'Triple click paragraph'], example: 'ជ្រើសរើសវាចេញ', tips: ['ប្រើ Shift + Arrow'], mistakes: ['កុំចុចខ្សោយ'], exercise: ['ជ្រើសរើស 1 ពាក្យ'] },
      { id: 'word-8', title: 'Copy, Cut, Paste', objective: 'ចម្លង, កាត់ និងបិទភ្ជាប់', explanation: 'Copy ចម្លងទុកចិត្ត។ Cut រុំចេញពី original។ Paste បិទភ្ជាប់។', steps: ['Select text', 'Ctrl+C', 'Ctrl+X', 'Ctrl+V'], example: 'ចម្លងអត្ថបទទៅកន្លែងផ្សេង', tips: ['ប្រើ shortcut'], mistakes: ['កុំលុបដោយចៃដន្យ'], exercise: ['ចម្លង 2 យ៉ាប់'] },
      { id: 'word-9', title: 'Font និង Font size', objective: 'បង្កើនភាពងាយស្រួល', explanation: 'Font គឺជាប្រភេទអក្សរ។ Font size គឺទំហំអក្សរ។', steps: ['ជ្រើសរើសអត្ថបទ', 'ជ្រើស font', 'កំណត់ size'], example: 'Calibri 12 pt', tips: ['ឯកសារសាលា ធម្មតា 11-12 pt'], mistakes: ['កុំប្រើ font ធំពេក'], exercise: ['ប្តូរវាយនឹងអក្សរកើន'] },
      { id: 'word-10', title: 'Bold, Italic, Underline', objective: 'ប្រើរចនាបថអត្ថបទ', explanation: 'បញ្ចេញចំណុចសំខាន់ដោយ bold, italic, underline។', steps: ['ជ្រើសអត្ថបទ', 'ជ្រើស B/I/U'], example: 'ចំណងជើង', tips: ['សម្រួលកុំលើស'], mistakes: ['កុំប្រើទាំង 3 ពេលមួយ'], exercise: ['បង្កើត heading'] },
      { id: 'word-11', title: 'Tables និង Images', objective: 'បង្កើត table និង insert image', explanation: 'Tables ប្រើសម្រាប់បញ្ជី។ Images ប្រើសម្រាប់ illustration.', steps: ['Insert > Table', 'Fill data', 'Insert >> Pictures'], example: 'តារាងពិន្ទុ', tips: ['តម្រឹម size'], mistakes: ['កុំធ្វើ tables over-large'], exercise: ['បង្កើត table 3x4'] },
      { id: 'word-12', title: 'Create a professional CV', objective: 'បង្កើតប្រវត្តិរូបសង្ខេប', explanation: 'CV គួរមាន heading, contact info, skill, education, experience and references.', steps: ['គ្រប់គ្រង structure', 'កែសម្រួល', 'លម្អិត'], example: 'CV for student internship.', tips: ['ត្រូវស្របពាក្យ'], mistakes: ['កុំរាប់ពាក្យ', 'កុំសរសេរខុស'], exercise: ['សរសេរប្រវត្តិរូប 1 page'] }
    ],
    project: 'បង្កើតប្រវត្តិរូបសង្ខេប (CV)',
    completedDescription: 'អ្នកបានបញ្ចប់ Microsoft Word.'
  },
  {
    id: 'excel',
    title: 'Microsoft Excel',
    subtitle: 'ធ្វើតារាងពិន្ទុ និងតារាងគណនាប្រកបដោយវិជ្ជាជីវៈ',
    icon: '📊',
    level: 'កម្រិតមធ្យម',
    duration: '5-6 ព្រឹក្សាម៉ោង',
    lessons: [
      { id: 'excel-1', title: 'ស្គាល់ Microsoft Excel', objective: 'យល់ពី Excel', explanation: 'Excel ជាកម្មវិធីសម្រាប់បង្កើតតារាងនិងគណនា។ វាអាចប្រើក្នុងការគណនាពិន្ទុ, budget, sales, report.', steps: ['បើក Excel', 'ស្វែងរក cells', 'បញ្ចូល data'], example: 'តារាងពិន្ទុរបស់សិស្ស', tips: ['ធ្វើឱ្យ data គ្រប់គ្រង'], mistakes: ['កុំភ្ជាប់ data'], exercise: ['បញ្ជាក់ 3 ផ្នែក Excel'] },
      { id: 'excel-2', title: 'Workbook និង Worksheet', objective: 'យល់ពី workbook, worksheet, cells', explanation: 'Workbook ជាបញ្ជីការងារទាំងមូល។ Worksheet ជាក្រដាសរង់ឈ្មោះຂ້', steps: ['បង្កើត workbook', 'បង្កើត worksheet', 'សម្រេច'], example: 'Workbook  "grades.xlsx"', tips: ['ដាក់ឈ្មោះ worksheet'], mistakes: ['កុំសរសេរ over multiple'], exercise: ['បង្កើត sheet 2'] },
      { id: 'excel-3', title: 'Rows និង Columns', objective: 'យល់ពីបន្ទាត់ និងជួរឈរ', explanation: 'Rows ឈរលើកណ្តាល។ Columns ឈរតាម vertical.', steps: ['សម្គាល់ row', 'column'], example: 'A, B, C columns', tips: ['ការគណនាលើ cell'], mistakes: ['កុំសរសេរជួរលើ row'], exercise: ['សរសេរឈ្មោះ cell A1'] },
      { id: 'excel-4', title: 'Cells', objective: 'យល់ពី cell address', explanation: 'Cell មានឈ្មោះ A1, B2. វាជាកន្លែងទុកអក្សរ, លេខ, สูตร។', steps: ['ជ្រើស cell', 'បញ្ចូលទិន្នន័យ', 'គណនា'], example: 'A1=សំណាង', tips: ['កុំលុបដោយចៃដន្យ'], mistakes: ['កុំសរសេរចម្ងាយ'], exercise: ['បញ្ជាក់ A1 និង B2'] },
      { id: 'excel-5', title: 'Enter data', objective: 'ដាក់ទិន្នន័យក្នុង cell', explanation: 'អ្នកអាចវាយឈ្មោះ, លេខ, កាលបរិច្ឆេទធានលក្ខណៈ។', steps: ['ជ្រើស cell', 'វាយ', 'Enter'], example: 'សិស្ស: មែន', tips: ['កុំរំកិល'], mistakes: ['កុំពង្រាយ'], exercise: ['បញ្ចូល tên 5 សិស្ស'] },
      { id: 'excel-6', title: 'Edit data', objective: 'កែប្រែទិន្នន័យ', explanation: 'អ្នកអាចចុច cell ពីចុះ, click formula bar, edit text and numbers.', steps: ['Double click', 'Edit', 'Enter'], example: 'កែប្រែពិន្ទុ | 90 to 95', tips: ['Always check'], mistakes: ['កុំចាក់ទ'], exercise: ['ប្តូរឈ្មោះ 1 cell'] },
      { id: 'excel-7', title: 'Format cells', objective: 'កែ format cells', explanation: 'Format includes font, size, alignment, border, color.', steps: ['Home tab', 'Format cells'], example: 'Header row bold blue', tips: ['ទុក header separate'], mistakes: ['កុំអោយ data too small'], exercise: ['Format header row'] },
      { id: 'excel-8', title: 'Basic formulas', objective: 'សិក្សាអំពី formula', explanation: 'Formula ចាប់ផ្តើមដោយ =. Example: =A2+B2. You must click formula bar to type it.', steps: ['Click cell', 'Type =', 'Use cell refs'], example: '=B2+C2', tips: ['Always start with ='], mistakes: ['កុំសរសេរ A2+B2 without ='], exercise: ['គណនាលើ cell C3'] },
      { id: 'excel-9', title: 'SUM, AVERAGE, MIN, MAX, COUNT', objective: 'ប្រើ functions', explanation: 'SUM adds values, AVERAGE calculates mean, MIN gets lowest, MAX gets highest, COUNT counts numbers.', steps: ['Select cell', 'Type =SUM(A1:A5)', 'Press Enter'], example: '=SUM(B2:B10)', tips: ['Use range properly'], mistakes: ['កុំខ្វែង range'], exercise: ['គណនាពិន្ទុសរុប'] },
      { id: 'excel-10', title: 'IF និង Conditional formatting', objective: 'កំណត់លក្ខន្តការសម្រាប់លទ្ធផល', explanation: 'IF allows logical checks. Conditional formatting colors cells based on value.', steps: ['=IF(C2>=50,"Passed","Failed")', 'Home > Conditional formatting'], example: 'សិស្ស Passed/Failed', tips: ['Use clear rules'], mistakes: ['កុំមិន set rule'], exercise: ['ធ្វើ rule Passed > 50'] },
      { id: 'excel-11', title: 'Charts and tables', objective: 'បង្ហាញទិន្នន័យប្រភេទ', explanation: 'Charts help explain data visually. Tables organize data for sorting and filtering.', steps: ['Select data', 'Insert chart', 'Choose chart type'], example: 'Bar chart monthly sales', tips: ['Use simple chart'], mistakes: ['កុំធ្វើ chart overloaded'], exercise: ['Create pie chart'] },
      { id: 'excel-12', title: 'Student grade spreadsheet', objective: 'បង្កើតតារាងពិន្ទុនិស្សិត', explanation: 'A grade spreadsheet can include name, Khmer, English, Math, total, average, result. Final result can be calculated with formulas.', steps: ['Create headers', 'Input scores', 'Calculate total & average', 'Use IF'], example: 'Student Name | Khmer | English | Math | Total | Average | Result', tips: ['Keep formulas consistent'], mistakes: ['កុំវាយតម្លៃមិនយល់'], exercise: ['Construct spreadsheet with at least 4 students'] }
    ],
    project: 'បង្កើតតារាងពិន្ទុនិស្សិត',
    completedDescription: 'អ្នកបានបញ្ចប់ Microsoft Excel.'
  },
  {
    id: 'powerpoint',
    title: 'Microsoft PowerPoint',
    subtitle: 'បង្កើតបទបង្ហាញដែលមានព័ត៌មាន និងការតម្រឹម',
    icon: '📽️',
    level: 'កម្រិតមធ្យម',
    duration: '3-4 ព្រឹក្សាម៉ោង',
    lessons: [
      { id: 'ppt-1', title: 'Introduction to PowerPoint', objective: 'យល់ពីមុខងារ PowerPoint', explanation: 'PowerPoint គឺជាកម្មវិធីបង្កើតបទបង្ហាញ។ វាអនុញ្ញាតឱ្យអ្នកបង្ហាញអត្ថបទ រូបភាព និង chart នៅលើ slide.', steps: ['បើក PowerPoint', 'ជ្រើសរើស template', 'បង្កើត slide'], example: 'Slide for school project', tips: ['ត្រូវសម្រួល'], mistakes: ['កុំចង្អ', 'កុំបញ្ចង់'], exercise: ['រៀបរាប់ 3 ចំណុច'] },
      { id: 'ppt-2', title: 'Create presentation', objective: 'បង្កើតបទបង្ហាញថ្មី', explanation: 'Google maintain theme and layouts.', steps: ['Open PowerPoint', 'New Presentation', 'Choose layout'], example: '5 slide introduction', tips: ['ចាប់ផ្តើមដោយ outline'], mistakes: ['កុំយក too much'], exercise: ['បង្កើត 3 slide'] },
      { id: 'ppt-3', title: 'Slides និង Layouts', objective: 'ស្គាល់ slide និង layout', explanation: 'Slide គឺជាប្លក់នៃបទបង្ហាញ។ Layout គឺ arrangement of text and media.', steps: ['Insert slide', 'Choose layout', 'Edit content'], example: 'Title slide, bullet slide, image slide', tips: ['Use consistent layouts'], mistakes: ['កុំចង'], exercise: ['Choose 3 layouts'] },
      { id: 'ppt-4', title: 'Themes and design', objective: 'បង្កើតទម្រង់ឈ្មោះ', explanation: 'Theme defines colors, fonts, and background for the presentation.', steps: ['Design > Themes', 'Choose color palette'], example: 'Blue theme for school', tips: ['Keep theme consistent'], mistakes: ['កុំបំបែក tone'], exercise: ['Choose theme'] },
      { id: 'ppt-5', title: 'Text, images and shapes', objective: 'បញ្ចូល media', explanation: 'Text, images, and shapes help communicate ideas smoothly.', steps: ['Add text box', 'Insert picture', 'Use shapes'], example: 'Add arrow shape to compare items', tips: ['Use high contrast'], mistakes: ['កុំ over clutter'], exercise: ['Add 2 shapes and 1 image'] },
      { id: 'ppt-6', title: 'Transitions and animations', objective: 'ធ្វើឱ្យបទបង្ហាញមានភាពរស់', explanation: 'Transitions and animations can make slides more dynamic but should stay simple.', steps: ['Transition tab', 'Select effect', 'Preview'], example: 'Fade in on title slide', tips: ['Use sparingly'], mistakes: ['កុំ overdo'], exercise: ['Apply fade transition'] },
      { id: 'ppt-7', title: 'Slides design principles', objective: 'ស្គាល់គោលការណ៍រចនា', explanation: 'Good slide design balances text, whitespace, and visual focus.', steps: ['Limit text', 'Use headings', 'Keep contrast'], example: 'One key idea per slide', tips: ['Use large readable text'], mistakes: ['កុំធ្វើ overcrowded slides'], exercise: ['Review 1 slide for readability'] },
      { id: 'ppt-8', title: 'Final presentation project', objective: 'បង្កើតបទបង្ហាញអំពីខ្លួនអ្នក', explanation: 'Students should create 5-7 slides with personal introduction, education, interests, skills, goals.', steps: ['Title slide', 'About me', 'School', 'Hobbies', 'Goal'], example: 'Intro slide with picture and simple text', tips: ['Use short phrases'], mistakes: ['កុំច្រើនពាក្យ'], exercise: ['Draft 6-slide presentation'] }
    ],
    project: 'បង្កើតបទបង្ហាញអំពីខ្លួនអ្នក',
    completedDescription: 'អ្នកបានបញ្ចប់ Microsoft PowerPoint.'
  },
  {
    id: 'internet-safety',
    title: 'អ៊ីនធឺណិត និងសុវត្ថិភាព',
    subtitle: 'រៀនពីការប្រើប្រាស់អ៊ីនធឺណិតដោយសុវត្ថិភាព',
    icon: '🔒',
    level: 'កម្រិតដំបូង',
    duration: '2-3 ព្រឹក្សាម៉ោង',
    lessons: [
      { id: 'internet-1', title: 'តើអ៊ីនធឺណិតគឺជាអ្វី?', objective: 'យល់ពីអ៊ីនធឺណិត', explanation: 'Internet គឺជាបណ្ដាញទូโลกនៃកុំព្យូទ័រ ដែលអនុញ្ញាតឱ្យផ្លាស់ប្ដូរព័ត៌មានជាទូទៅ។', steps: ['Internet connects devices', 'Search information', 'Send messages'], example: 'Gmail, Google, Facebook', tips: ['Use it wisely'], mistakes: ['កុំចែករំលាយ'], exercise: ['បញ្ជាក់ 2 អត្ថប្រយោជន៍'] },
      { id: 'internet-2', title: 'Web browsers', objective: 'ស្គាល់ browser', explanation: 'Browser like Chrome, Edge, Firefox lets users open websites.', steps: ['Open browser', 'Type URL', 'Search'], example: 'Google Chrome', tips: ['Use trusted sites'], mistakes: ['កុំclick suspicious popups'], exercise: ['បើក browser'] },
      { id: 'internet-3', title: 'Google search', objective: 'ស្វែងរកព័ត៌មានមែន', explanation: 'Search helps find key information fast.', steps: ['Type keywords', 'Filter results', 'Open trusted source'], example: 'Search "របៀបរក្សាទុក Word"', tips: ['Use specific keywords'], mistakes: ['កុំអានតាមវិធីហៅ'], exercise: ['ទាញយក 1 ដំណឹង'] },
      { id: 'internet-4', title: 'Password security', objective: 'ការពារ password', explanation: 'Password should be long, unique and private.', steps: ['Use 8+ characters', 'Combine letters and numbers', 'Do not share'], example: 'Use memorable but complex passwords', tips: ['Use manager if needed'], mistakes: ['កុំ use 123456'], exercise: ['ច្នៃ password 1 នាក់'] },
      { id: 'internet-5', title: 'Phishing and suspicious links', objective: 'ស្គាល់ phishing', explanation: 'Phishing tricks users into giving personal information.', steps: ['Look at sender', 'Hover links', 'Do not click suspicious'], example: 'A fake account reset email', tips: ['Check URL'], mistakes: ['កុំ trust urgent messages'], exercise: ['Analyzing fake email'] },
      { id: 'internet-6', title: 'Privacy and social media safety', objective: 'រក្សាសម្ងាត់លើសង្គម', explanation: 'Be careful with personal data and online profiles.', steps: ['Set privacy', 'Limit public info', 'Think before posting'], example: 'Keep phone number hidden', tips: ['Log out when using public devices'], mistakes: ['កុំ share password'], exercise: ['Review privacy settings'] }
    ],
    project: 'ស្វែងរកព័ត៌មានដោយសុវត្ថិភាព',
    completedDescription: 'អ្នកបានរៀនអំពីអ៊ីនធឺណិត និងសុវត្ថិភាព។'
  },
  {
    id: 'practical-skills',
    title: 'លំហាត់អនុវត្ត',
    subtitle: 'បញ្ចប់កិច្ចការសាលា និងការងារពិតប្រាកដ',
    icon: '🚀',
    level: 'កម្រិតមធ្យម',
    duration: '3-5 ព្រឹក្សាម៉ោង',
    lessons: [
      { id: 'practice-1', title: 'Create a school report', objective: 'បង្កើតរបាយការណ៍សាលា', explanation: 'School report should include title, sections, and clear formatting.', steps: ['Set title', 'Add sections', 'Insert data and save'], example: 'School report for science subject', tips: ['Keep pages clean'], mistakes: ['កុំសរសេរដោយមិន struct'], exercise: ['Draft 2-page report'] },
      { id: 'practice-2', title: 'Create a CV', objective: 'បង្កើតប្រវត្តិរូប', explanation: 'CV should summarize education, skills, and goals.', steps: ['Add personal info', 'Write education', 'Add skills'], example: 'CV for student intern', tips: ['Use clear headings'], mistakes: ['កុំ overlong'], exercise: ['Create one-page CV'] },
      { id: 'practice-3', title: 'Create a formal letter', objective: 'សរសេរអ៊ីមែលប្រកបដោយ formal letter', explanation: 'Use proper greeting, purpose, and closing.', steps: ['Add address', 'Write body', 'End with closing'], example: 'Application letter to school leader', tips: ['Use professional tone'], mistakes: ['កុំ over casual'], exercise: ['Write 1 formal letter'] },
      { id: 'practice-4', title: 'Create a student grade sheet', objective: 'បង្កើតតារាងពិន្ទុ', explanation: 'This spreadsheet should include subjects, total, average, and result.', steps: ['Create headers', 'Insert scores', 'Add formula'], example: 'Math, English, Khmer scores', tips: ['Consistent data'], mistakes: ['កុំភ្លាម'], exercise: ['Create at least 5 rows'] },
      { id: 'practice-5', title: 'Create a monthly budget', objective: 'គ្រប់គ្រងថវិការ', explanation: 'Budget spreadsheet track income, expenses, and saving.', steps: ['Input income', 'Add expense list', 'Calculate totals'], example: 'Monthly sales and spend', tips: ['Check sums'], mistakes: ['កុំ ignore small savings'], exercise: ['Create monthly budget'] },
      { id: 'practice-6', title: 'Create a sales report', objective: 'បង្កើតរបាយការណ៍លក់', explanation: 'Sales report organizes product list, units, price and total revenue.', steps: ['Enter data', 'Add formulas', 'Create chart'], example: 'Daily sales report', tips: ['Use chart for summary'], mistakes: ['កុំ mismatch currency'], exercise: ['Generate sales chart'] },
      { id: 'practice-7', title: 'Create a PowerPoint presentation', objective: 'បង្កើតបទបង្ហាញ', explanation: 'Present a topic logically with a clear introduction and conclusion.', steps: ['Plan 5 slides', 'Insert text', 'Add visuals'], example: 'Presentation on school project', tips: ['Use minimal text'], mistakes: ['កុំ overfill slides'], exercise: ['Ready 5 slides'] }
    ],
    project: 'បង្កើតរបាយការណ៍មួយប្រភេទ',
    completedDescription: 'អ្នកបានបញ្ចប់ការប្រជុំបញ្ចូលនូវជំនាញប្រើកុំព្យូទ័រ។'
  }
];

const glossary = [
  { term: 'Computer', khmer: 'កុំព្យូទ័រ', meaning: 'ឧបករណ៍អេឡិចត្រូនិកដែលអាចរក្សាទុក និងដំណើរការព័ត៌មាន។', example: 'កុំព្យូទ័រអាចជួយអ្នករៀន និងធ្វើការងារ។' },
  { term: 'Hardware', khmer: 'ផ្នែករឹង', meaning: 'ធាតុផ្នែកគ្រឿងកុំព្យូទ័រសម្រាប់កែច្នៃអេឡិចត្រូនិក។', example: 'Monitor, keyboard, mouse, CPU។' },
  { term: 'Software', khmer: 'កម្មវិធី', meaning: 'កម្មវិធីដែលធ្វើការលើកុំព្យូទ័រ។', example: 'Microsoft Word, Excel, Google Chrome។' },
  { term: 'CPU', khmer: 'CPU', meaning: 'ផ្នែកដែលធ្វើការគណនារបស់កុំព្យូទ័រ។', example: 'CPU កំណត់ប្រតិបត្តិការផ្នែកសំខាន់ៗ។' },
  { term: 'RAM', khmer: 'RAM', meaning: 'អង្គផ្ទុកបណ្តោះអាសន្ន៏ដែលផ្តល់សមត្ថភាពដំឡើងកម្មវិធី។', example: 'RAM ជួយកម្មវិធីដំណើរការលឿន។' },
  { term: 'Keyboard', khmer: 'ក្ដារចុច', meaning: 'សំណុំគ្រាប់ចុចសម្រាប់វាយអក្សរ និងបញ្ជា។', example: 'អ្នកប្រើ keyboard ដើម្បីវាយអត្ថបទ។' },
  { term: 'Mouse', khmer: 'កណ្ដុរ', meaning: 'ឧបករណ៍ដែលអនុញ្ញាតឱ្យចុច និងផ្លាស់ទី cursor។', example: 'Mouse សម្រាប់ជ្រើសរើស icon ឬ folder។' },
  { term: 'Monitor', khmer: 'អេក្រង់', meaning: 'ផ្នែកដែលបង្ហាញព័ត៌មានសម្រាប់អ្នកប្រើប្រាស់។', example: 'អ្នកមើលစာរបស់អ្នកលើ monitor។' },
  { term: 'File', khmer: 'ឯកសារ', meaning: 'ទិន្នន័យដែលរក្សាទុកនៅក្នុងកុំព្យូទ័រ។', example: 'ឯកសារ Word និង Excel។' },
  { term: 'Folder', khmer: 'ថត', meaning: 'ធាតុដែលប្រើដើម្បីរៀបចំឯកសារជាក្រុម។', example: 'ថត "កិច្ចការសាលា"។' },
  { term: 'Internet', khmer: 'អ៊ីនធឺណិត', meaning: 'បណ្តាញទូទៅដែលភ្ជាប់កុំព្យូទ័រជាច្រើន។', example: 'អ្នកអាចស្វែងរកព័ត៌មានតាមអ៊ីនធឺណិត។' },
  { term: 'Download', khmer: 'ទាញយក', meaning: 'ការទាញយកឯកសារ ឬព័ត៌មានពីអ៊ីនធឺណិត។', example: 'អ្នកអាចទាញយកឯកសារនេះ។' },
  { term: 'Upload', khmer: 'ផ្ទុកឡើង', meaning: 'ការផ្ទុកឯកសារឡើងទៅកាន់ server ឬ web។', example: 'អ្នកអាចផ្ទុកឯកសារលើ Google Drive។' },
  { term: 'Save', khmer: 'រក្សាទុក', meaning: 'សохранការងារ ដើម្បីកុំបាត់បង់។', example: 'កុំភ្លេច Save ខណៈសរសេរ។' },
  { term: 'Copy', khmer: 'ចម្លង', meaning: 'ចម្លងអត្ថបទ ឬឯកសារដោយស្ដាប់ថា original still remains.', example: 'Ctrl + C = ចម្លង' },
  { term: 'Paste', khmer: 'បិទភ្ជាប់', meaning: 'ដាក់អត្ថបទ ឬឯកសារដែលបានចម្លងទៅកន្លែងថ្មី។', example: 'Ctrl + V = បិទភ្ជាប់' },
  { term: 'Print', khmer: 'បោះពុម្ព', meaning: 'ផ្ញើឯកសារទៅម៉ាស៊ីនបោះពុម្ព។', example: 'អ្នកអាចបោះពុម្ព report ដោយព្រីន។' }
];

const shortcuts = [
  { combo: 'Ctrl + C', action: 'ចម្លង', group: 'General' },
  { combo: 'Ctrl + V', action: 'បិទភ្ជាប់', group: 'General' },
  { combo: 'Ctrl + X', action: 'កាត់', group: 'General' },
  { combo: 'Ctrl + Z', action: 'មិនធ្វើវិញ', group: 'General' },
  { combo: 'Ctrl + S', action: 'រក្សាទុក', group: 'Word / Excel' },
  { combo: 'Ctrl + A', action: 'ជ្រើសរើសទាំងអស់', group: 'General' },
  { combo: 'Ctrl + F', action: 'ស្វែងរក', group: 'General' },
  { combo: 'Alt + Tab', action: 'ប្ដូរកម្មវិធី', group: 'Windows' },
  { combo: 'Windows + D', action: 'បង្ហាញ Desktop', group: 'Windows' },
  { combo: 'Windows + E', action: 'បើក File Explorer', group: 'Windows' }
];

const faqItems = [
  { q: 'តើខ្ញុំគួរចាប់ផ្តើមពីណា?', a: 'អ្នកគួរចាប់ផ្តើមពីវគ្គ "ជំនាញកុំព្យូទ័រមូលដ្ឋាន" ហើយបន្តទៅ "ជំនាញវាយអក្សរ" និង "Microsoft Word" ។' },
  { q: 'តើខ្ញុំអាចរៀនតាមទូរស័ព្ទបានទេ?', a: 'បាន។ ទំព័រនេះមានការរចនាសម្រាប់ទូរស័ព្ទ ធ្វើឱ្យអ្នកអាចរៀនក្នុងដំណាក់កាលបរិស្ថានផ្សេងៗបាន។' },
  { q: 'តើវគ្គសិក្សានេះសម្រាប់អ្នកចាប់ផ្តើមទេ?', a: 'ខ្ញុំគឺជាវគ្គសម្រាប់អ្នកចាប់ផ្តើមដំបូងដែលមិនសូវស្គាល់កុំព្យូទ័រ។' },
  { q: 'តើវឌ្ឍនភាពរបស់ខ្ញុំត្រូវបានរក្សាទុកយ៉ាងដូចម្តេច?', a: 'ប្រព័ន្ធប្រើ localStorage រក្សាទុកមេរៀនដែលបានបញ្ចប់ ការវាយតម្លៃ ការងារចុងក្រោយ និងការជោគជ័យ។' },
  { q: 'តើខ្ញុំអាចរៀនតាមលំដាប់ណា?', a: 'អ្នកអាចធ្វើតាមលំដាប់ដែលបានណែនាំនៅលើទំព័រដើម ឬរៀនតាមវគ្គសិក្សាដែលអ្នកពេញចិត្ត។' }
];

const starterPath = [
  'ស្គាល់កុំព្យូទ័រ',
  'រៀនប្រើ Keyboard និង Mouse',
  'រៀនគ្រប់គ្រងឯកសារ',
  'Microsoft Word',
  'Microsoft Excel',
  'Microsoft PowerPoint',
  'អ៊ីនធឺណិត និងសុវត្ថិភាព',
  'លំហាត់អនុវត្ត'
];

const STORAGE_KEYS = {
  completedLessons: 'studentai.completedLessons',
  quizScores: 'studentai.quizScores',
  lastLesson: 'studentai.lastLesson',
  achievements: 'studentai.achievements',
  darkMode: 'studentai.darkMode',
  preference: 'studentai.preference'
};

function safeJSONParse(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
}

function getStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return safeJSONParse(value, fallback);
  } catch (error) {
    return fallback;
  }
}

function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn('localStorage unavailable:', error);
  }
}

function getCompletedLessons() {
  return getStorage(STORAGE_KEYS.completedLessons, []);
}

function setCompletedLessons(list) {
  setStorage(STORAGE_KEYS.completedLessons, list);
}

function getQuizScores() {
  return getStorage(STORAGE_KEYS.quizScores, {});
}

function setQuizScores(scores) {
  setStorage(STORAGE_KEYS.quizScores, scores);
}

function getAchievements() {
  return getStorage(STORAGE_KEYS.achievements, []);
}

function setAchievements(list) {
  setStorage(STORAGE_KEYS.achievements, list);
}

function getLastLesson() {
  return getStorage(STORAGE_KEYS.lastLesson, { courseId: 'basic-computer', lessonId: 'basic-1' });
}

function setLastLesson(courseId, lessonId) {
  setStorage(STORAGE_KEYS.lastLesson, { courseId, lessonId });
}

function getCourseById(courseId) {
  return courses.find((course) => course.id === courseId) || courses[0];
}

function getLessonById(courseId, lessonId) {
  const course = getCourseById(courseId);
  return course.lessons.find((lesson) => lesson.id === lessonId) || course.lessons[0];
}

function calculateProgress(courseId) {
  const course = getCourseById(courseId);
  const completed = getCompletedLessons();
  let count = 0;
  course.lessons.forEach((lesson) => {
    if (completed.includes(`${courseId}:${lesson.id}`)) count += 1;
  });
  const percentage = course.lessons.length ? Math.round((count / course.lessons.length) * 100) : 0;
  return { completed: count, total: course.lessons.length, percentage };
}

function getAllLessonIds() {
  const all = [];
  courses.forEach((course) => {
    course.lessons.forEach((lesson) => all.push(`${course.id}:${lesson.id}`));
  });
  return all;
}

function getOverviewStats() {
  const completed = getCompletedLessons();
  const totalLessons = getAllLessonIds().length;
  const completedCount = completed.length;
  return {
    totalLessons,
    completedCount,
    remaining: Math.max(totalLessons - completedCount, 0),
    percent: totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0,
    courses: courses.length
  };
}

function buildAchievementList() {
  const unlocked = getAchievements();
  const list = [
    { id: 'first-lesson', title: 'ចាប់ផ្តើមរៀន', detail: 'បញ្ចប់មេរៀនដំបូង', requirement: 1 },
    { id: 'five-lessons', title: 'អ្នករៀនសកម្ម', detail: 'បញ្ចប់ 5 មេរៀន', requirement: 5 },
    { id: 'basic-course', title: 'ជំនាញកុំព្យូទ័រ', detail: 'បញ្ចប់វគ្គសិក្សា "ជំនាញកុំព្យូទ័រមូលដ្ឋាន"', requirement: 12 },
    { id: 'word-course', title: 'Word Beginner', detail: 'បញ្ចប់ Microsoft Word', requirement: 12 },
    { id: 'excel-course', title: 'Excel Beginner', detail: 'បញ្ចប់ Microsoft Excel', requirement: 12 },
    { id: 'ppt-course', title: 'PowerPoint Beginner', detail: 'បញ្ចប់ Microsoft PowerPoint', requirement: 8 }
  ];

  return list.map((item) => {
    const unlockedStatus = unlocked.includes(item.id);
    const course = item.id === 'basic-course' ? 'basic-computer' : item.id === 'word-course' ? 'word' : item.id === 'excel-course' ? 'excel' : item.id === 'ppt-course' ? 'powerpoint' : null;
    const prog = course ? calculateProgress(course).completed : getCompletedLessons().length;
    const earned = unlockedStatus || (prog >= item.requirement && item.id !== 'first-lesson' ? true : false);
    return { ...item, unlocked: earned };
  });
}

function updateAchievements() {
  const current = getAchievements();
  const next = new Set(current);
  const firstCount = getCompletedLessons().length;
  if (firstCount >= 1) next.add('first-lesson');
  if (firstCount >= 5) next.add('five-lessons');
  if (calculateProgress('basic-computer').completed >= 12) next.add('basic-course');
  if (calculateProgress('word').completed >= 12) next.add('word-course');
  if (calculateProgress('excel').completed >= 12) next.add('excel-course');
  if (calculateProgress('powerpoint').completed >= 8) next.add('ppt-course');
  setAchievements(Array.from(next));
}

function courseCardMarkup(course) {
  const progress = calculateProgress(course.id);
  return `
    <article class="card course-card">
      <div class="course-cover">${course.icon}</div>
      <div class="card-body">
        <div class="label">${course.level}</div>
        <h3>${course.title}</h3>
        <p>${course.subtitle}</p>
        <div class="meta-row">
          <span class="meta-pill">${course.lessons.length} មេរៀន</span>
          <span class="meta-pill">${course.duration}</span>
        </div>
        <div class="progress-bar"><div class="progress-fill" style="width:${progress.percentage}%"></div></div>
        <div class="mini-stat" style="margin-top:12px;"><span>វឌ្ឍនភាព</span><strong>${progress.percentage}%</strong></div>
        <div class="lesson-actions" style="margin-top:18px;">
          <a href="course.html?id=${course.id}" class="btn">ចាប់ផ្តើមរៀន</a>
        </div>
      </div>
    </article>
  `;
}

function renderCourseBadges(course) {
  return `
    <div class="inline-tags" style="margin-bottom:18px;">
      <span class="label">${course.level}</span>
      <span class="label success">${course.lessons.length} មេរៀន</span>
      <span class="label warning">${course.duration}</span>
    </div>
  `;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function createSearchIndex() {
  const index = [];
  courses.forEach((course) => {
    index.push({ type: 'course', title: course.title, url: `course.html?id=${course.id}` });
    course.lessons.forEach((lesson) => {
      index.push({ type: 'lesson', title: `${course.title} — ${lesson.title}`, url: `lesson.html?course=${course.id}&lesson=${lesson.id}` });
    });
  });
  glossary.forEach((item) => {
    index.push({ type: 'term', title: `${item.term} — ${item.khmer}`, url: 'glossary.html' });
  });
  return index;
}

const searchIndex = createSearchIndex();
