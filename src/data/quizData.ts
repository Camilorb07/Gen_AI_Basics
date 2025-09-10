import { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'origins-nlp',
    concept: 'Origins of NLP',
    explanation: {
      whatItIs: 'The field of Natural Language Processing (NLP) began at the same time as the earliest developments in computer science. Researchers were curious whether computers could understand and generate human language. Early efforts focused mainly on machine translation, especially during the Cold War when translating Russian to English was seen as strategically important. One famous moment was the Georgetown Experiment (1954), where researchers demonstrated a very limited automatic translation system. Although it could only handle a small vocabulary, it sparked optimism that fully automatic translation might be possible.',
      whyItMatters: 'Understanding the origins of NLP helps us appreciate how far the field has come and provides context for current breakthroughs. The early focus on machine translation laid the groundwork for today\'s sophisticated language models, showing that the dream of computers understanding human language has been a long-standing goal in computer science.'
    },
    question: {
      text: 'When did the field of Natural Language Processing (NLP) begin?',
      type: 'multiple-choice',
      options: [
        '1940s–1950s',
        '1970s',
        '1990s',
        '2010s'
      ],
      correctAnswer: 'A'
    },
    answerExplanation: {
      correctAnswer: 'A. 1940s–1950s',
      details: [
        'NLP began in the 1940s–1950s, alongside the birth of computer science.',
        'Early projects focused on machine translation, like Russian → English.',
        'The Georgetown Experiment (1954) was a landmark demo, showing automatic translation of over 60 Russian sentences into English.',
        'This was the first proof-of-concept that computers could process human language, even if very limited at the time.'
      ]
    }
  },
  {
    id: 'word-embeddings',
    concept: 'Word Embeddings',
    explanation: {
      whatItIs: 'By the 2010s, researchers wanted computers not just to read words but to understand their meaning. The breakthrough came with word embeddings — a method that represents words as numbers in a continuous space. The key idea: words used in similar contexts have similar meanings, so their numerical representations should also be close together. For example, "cat" and "dog" often appear in similar contexts, so their embeddings are close. Meanwhile, "cat" and "car" are far apart.',
      whyItMatters: 'This was the first time computers could capture semantic relationships between words, instead of treating them as independent symbols. Word embeddings laid the foundation for more advanced models like Transformers. Understanding this concept helps explain how modern AI can grasp meaning and context in language.'
    },
    question: {
      text: 'In the 2010s, what new method helped computers understand the meaning of words?',
      type: 'multiple-choice',
      options: [
        'Storing words as dictionary definitions',
        'Translating text directly between languages',
        'Representing words as numbers that capture meaning (word embeddings)',
        'Counting how many times each word appears'
      ],
      correctAnswer: 'C'
    },
    answerExplanation: {
      correctAnswer: 'C. Word embeddings',
      details: [
        'In the early 2010s, models like Word2Vec (2013) and GloVe (2014) introduced word embeddings.',
        'Word embeddings represent each word as a vector of numbers.',
        'Words with similar meanings appear close together in this space: "king" – "man" + "woman" ≈ "queen"',
        '"cat" is close to "dog".',
        'This was the first time NLP systems could capture meaning and relationships between words.',
        'It was a major step that made later breakthroughs like Transformers possible.'
      ]
    }
  },
  {
    id: 'transformers-milestone',
    concept: 'Transformers Milestone',
    explanation: {
      whatItIs: 'Before 2017, most NLP models were based on Recurrent Neural Networks (RNNs) or LSTMs, which processed text one word at a time. This made training slow and made it difficult to capture long-range relationships (like linking "it" to "book" many words earlier). The breakthrough came in 2017 with a new architecture called the Transformer. Its key innovation was attention, which allows the model to look at all tokens in a sequence in parallel and decide which ones matter most to each other.',
      whyItMatters: 'This design made training much faster and scalable, and it became the foundation for today\'s Large Language Models (LLMs). Understanding Transformers is crucial because every modern LLM — from GPT to Claude, Gemini, and LLaMA — is built on this architecture.'
    },
    question: {
      text: 'Which breakthrough paper introduced the architecture that made modern LLMs possible?',
      type: 'multiple-choice',
      options: [
        'Word2Vec (2013)',
        'Attention Is All You Need (2017)',
        'BERT (2018)',
        'GPT-3 (2020)'
      ],
      correctAnswer: 'B'
    },
    answerExplanation: {
      correctAnswer: 'B. Attention Is All You Need (2017)',
      details: [
        'In 2017, Vaswani et al. published "Attention Is All You Need", introducing the Transformer architecture.',
        'Unlike older models (RNNs, LSTMs), Transformers process text in parallel and capture long-range relationships with attention.',
        'This breakthrough made it possible to train much larger models — leading to the LLMs we know today.',
        'Modern models like GPT, Claude, Gemini, and LLaMA are all built on the Transformer foundation.'
      ]
    }
  },
  {
    id: 'tokenization',
    concept: 'Tokenization',
    explanation: {
      whatItIs: 'Tokenization is the process of breaking down text into smaller units called tokens, which LLMs use instead of raw text. Depending on the tokenizer, tokens can be whole words, subwords, or characters. For example, "This is unbelievable" becomes ["This", "is", "un", "believable"]. In this case, "is" stays whole, while the longer word "unbelievable" is split into smaller, reusable parts. Each model has its own tokenizer, so the splits may vary.',
      whyItMatters: 'For LLM users, tokenization directly affects cost and efficiency. Pricing for tools like ChatGPT or Gemini is based on the number of tokens, not words. A long document might contain many more tokens than you\'d expect from word count alone, which increases cost. Understanding tokenization also explains why unusual or complex words sometimes get split into multiple pieces, which can slightly influence how the model interprets text.'
    },
    question: {
      text: 'What is tokenization in NLP?',
      type: 'multiple-choice',
      options: [
        'Translating text into another language',
        'Compressing text to save storage',
        'Encrypting text for security',
        'Breaking text into smaller units (tokens)'
      ],
      correctAnswer: 'D'
    },
    answerExplanation: {
      correctAnswer: 'D. Tokenization',
      details: [
        'Tokenization breaks down text into tokens — the basic units an LLM understands.',
        'Example: "This is unbelievable" → ["This", "is", "un", "believable"].',
        'This process lets the model handle rare or new words by recombining familiar parts.',
        'Since costs are based on tokens, efficient tokenization is crucial for managing both performance and expense.'
      ]
    }
  },
  {
    id: 'tokenization-example',
    concept: 'Tokenization Examples',
    explanation: {
      whatItIs: 'Modern LLMs use subword tokenization to balance efficiency and flexibility. Simple, common words like "is" or "the" typically remain as single tokens because they appear frequently in training data. However, complex or less common words like "unbelievable" are often split into smaller, more manageable pieces like "un" and "believable". This approach allows the model to handle unfamiliar words by combining parts it has already learned.',
      whyItMatters: 'Understanding how tokenization works in practice helps users predict costs and understand model behavior. When you see a model struggle with unusual words or names, it\'s often because those words were split into many small tokens during processing, making it harder for the model to maintain coherent understanding.'
    },
    question: {
      text: 'Which of the following is the closest example of tokenization for modern LLMs?',
      type: 'multiple-choice',
      options: [
        '"This is unbelievable" → ["This", "is", "un", "believable"]',
        '"This is unbelievable" → ["This", "is", "unbelievable"]',
        '"This is unbelievable" → ["This is unbelievable"]',
        '"This is unbelievable" → ["T", "h", "i", "s", "i", "s", "u", "n", …]'
      ],
      correctAnswer: 'A'
    },
    answerExplanation: {
      correctAnswer: 'A. Subword tokenization',
      details: [
        'Modern LLMs use subword tokenization to balance efficiency and flexibility.',
        'Simple words like "is" remain whole.',
        'Complex words like "unbelievable" are split into smaller, reusable pieces ("un" + "believable").',
        'This allows models to handle unfamiliar words by piecing together parts they\'ve already learned.'
      ]
    }
  },
  {
    id: 'token-ids',
    concept: 'Token IDs',
    explanation: {
      whatItIs: 'After text is tokenized, each token is assigned a unique number called a token ID from the model\'s vocabulary. For example, "un" might become 5321 and "believable" might become 8742. These IDs provide a consistent, standardized way for the model to handle text, even though the actual numbers can differ between models. On their own, token IDs don\'t carry meaning — they\'re just identifiers. To add meaning, the model maps them into embeddings.',
      whyItMatters: 'Token IDs are the link between text and the model\'s mathematical world. For LLM users, this step explains why models can handle text in any language or style as long as it can be broken into tokens with IDs. It\'s also why the same text might use a different number of tokens in different models — each has its own vocabulary and ID system.'
    },
    question: {
      text: 'After text is split into tokens, what happens next in an LLM?',
      type: 'multiple-choice',
      options: [
        'Each token is saved as an image of the word',
        'Each token is stored in a dictionary of synonyms',
        'Each token is translated into binary code manually',
        'Each token is assigned a number called a token ID',
      ],
      correctAnswer: 'D'
    },
    answerExplanation: {
      correctAnswer: 'D. Each token is assigned a token ID',
      details: [
        'Once text is tokenized, each token gets a unique integer from the model\'s vocabulary.',
        'Example: "un" → 5321, "believable" → 8742.',
        'IDs make it possible for the model to work with tokens consistently, regardless of the actual text.',
        'But token IDs alone are just numbers. They don\'t capture meaning.',
        'The next step is to map token IDs into embeddings, where meaning is added.'
      ]
    }
  },
  {
    id: 'context-window',
    concept: 'Context Window',
    explanation: {
      whatItIs: 'The context window is an LLM\'s short-term memory: the maximum number of tokens it can keep in mind at once. If the window is exceeded, the oldest tokens are dropped. Imagine a very small model with a 20-token window — as the conversation continues, once you pass 20 tokens, the first ones are forgotten and only the last 20 remain visible. Everything counts toward this limit: conversation history, instructions, documents, and your latest message. Modern models have much larger windows: some handle 32k tokens (around 50 pages), and advanced ones like GPT-5 can manage 200k+ tokens (hundreds of pages).',
      whyItMatters: 'For users, the context window explains why models sometimes "forget" earlier parts of a long conversation or lose details from large documents. Knowing this helps you decide when to summarize, chunk text, or remind the model of key points to keep it consistent.'
    },
    question: {
      text: 'What is the "context window" in an LLM?',
      type: 'multiple-choice',
      options: [
        'The size of the computer screen used for training',
        'The maximum number of tokens (short-term memory) the model can consider at once',
        'The time limit for generating responses',
        'The number of parameters in the model'
      ],
      correctAnswer: 'B'
    },
    answerExplanation: {
      correctAnswer: 'B. The context window is short-term memory',
      details: [
        'The context window is the maximum number of tokens an LLM can keep in mind at once.',
        'Example: with a 20-token window, once you pass 20 tokens, the earliest ones are dropped.',
        'This includes conversation history, documents, instructions, and prompts — not just the last message.',
        'Modern LLMs can handle much larger windows (32k–200k+ tokens, equivalent to dozens or even hundreds of pages).'
      ]
    }
  },
  {
    id: 'context-window-memory',
    concept: 'Context Window Memory',
    explanation: {
      whatItIs: 'An LLM does not have long-term memory of past conversations beyond its current context window. It only sees what is currently inside its context window at any given moment. If information from the beginning of a conversation has scrolled out of the context window due to length limits, the model can no longer access that information. This is fundamentally different from human memory, which can recall events from days, weeks, or years ago.',
      whyItMatters: 'This limitation explains why LLMs might seem to "forget" important details from earlier in long conversations. Users need to understand that models don\'t retain information across separate sessions or beyond their context window limits, which affects how you should structure long interactions with AI systems.'
    },
    question: {
      text: 'After 7 days of continuous conversation, the model will still remember what we talked about at the beginning.',
      type: 'true-false',
      correctAnswer: 'False'
    },
    answerExplanation: {
      correctAnswer: 'False',
      details: [
        'An LLM does not have long-term memory of past conversations.',
        'It only sees what is currently inside its context window.',
        'If the beginning of the conversation has scrolled out of the context window, the model can\'t access it anymore.',
        'Even after 7 days, the model only remembers as far back as the current context window allows.'
      ]
    }
  },
  {
    id: 'embeddings',
    concept: 'Embeddings',
    explanation: {
      whatItIs: 'After tokens are mapped to IDs (plain numbers), the model needs a way to give those numbers meaning. That\'s what embeddings do. An embedding turns each token ID into a vector — a list of numbers that represent meaning in a high-dimensional space. For example, the token ID for "cat" might be 5321, which becomes a vector like [0.12, –0.45, 0.88, …]. Words with related meanings get vectors that are close together ("cat" and "dog"), while unrelated words are far apart ("cat" and "car").',
      whyItMatters: 'For LLM users, embeddings explain how models can understand context and relationships between words instead of treating them as isolated symbols. This is also why models are so good at analogies and associations: words that appear in similar contexts end up clustered together in embedding space.'
    },
    question: {
      text: 'How do embeddings help LLMs understand tokens?',
      type: 'multiple-choice',
      options: [
        'They compress text for storage',
        'They replace tokens with dictionary definitions',
        'They turn each token ID into a vector that captures meaning',
        'They sort tokens in alphabetical order'
      ],
      correctAnswer: 'C'
    },
    answerExplanation: {
      correctAnswer: 'C. Embeddings turn token IDs into vectors that capture meaning',
      details: [
        'A token ID (e.g., "cat" → 5321) is just a plain number.',
        'The embedding layer maps this ID into a vector: a list of numbers like [0.12, –0.45, 0.88, …].',
        'In this space: "cat" and "dog" end up close together (both animals).',
        '"cat" and "car" are far apart (animal vs. object).',
        'These vectors give the model a way to work with meaning, instead of just raw numbers.'
      ]
    }
  },
  {
    id: 'tensors',
    concept: 'Tensors',
    explanation: {
      whatItIs: 'Once tokens are turned into embeddings (vectors), the model stacks them into tensors, the multi-dimensional numerical structures that flow through the network. A single embedding is a 1-D tensor (vector). A sentence becomes a 2-D tensor: [sequence_length × embedding_size]. In practice, LLMs usually work with 3-D tensors, since they process multiple sequences at once: [batch_size × sequence_length × embedding_size]. Inside the model, these tensors are transformed again and again by the layers, enriching their meaning at each step.',
      whyItMatters: 'Tensors are what allow LLMs to take advantage of modern hardware like GPUs and TPUs, which are optimized for parallel matrix operations. This is the reason today\'s massive models can run efficiently — tensors let the system crunch huge amounts of data quickly. For users, this is why LLMs like ChatGPT or Gemini can deliver complex answers in seconds instead of hours.'
    },
    question: {
      text: 'What are tensors in an LLM?',
      type: 'multiple-choice',
      options: [
        'Pictures of each token',
        'Multi-dimensional arrays of numbers built from embeddings',
        'A memory bank of training data',
        'Special tokens for punctuation'
      ],
      correctAnswer: 'B'
    },
    answerExplanation: {
      correctAnswer: 'B. Tensors are multi-dimensional arrays of numbers built from embeddings',
      details: [
        'A vector is a 1-D tensor (one embedding, like "cat").',
        'A 2-D tensor is a matrix of embeddings for all tokens in a sequence.',
        'A 3-D tensor is used when processing many sequences at once: [batch_size × sequence_length × embedding_size].',
        'Inside the model, tensors are transformed layer by layer, enriching their meaning and context.',
        'Because tensors are processed with parallel matrix math, they are the reason LLMs can run quickly and scale to massive sizes.'
      ]
    }
  },
  {
    id: 'transformers',
    concept: 'Transformers',
    explanation: {
      whatItIs: 'A Transformer is the core architecture behind modern LLMs. Unlike older models (like RNNs or LSTMs) that processed tokens step by step, Transformers handle all tokens in parallel, making them faster and more scalable. Their key innovation is self-attention, which allows the model to capture relationships between tokens across the entire sequence. By stacking many Transformer layers, the model builds a deep, contextual understanding of text.',
      whyItMatters: 'Every modern LLM — from GPT to Claude, Gemini, and LLaMA — is built on Transformers. For users, this explains why today\'s models can handle complex tasks so effectively: the Transformer design makes them both fast (parallel processing) and smart (self-attention for context).'
    },
    question: {
      text: 'What is a Transformer in modern LLMs?',
      type: 'multiple-choice',
      options: [
        'The architecture that processes tokens in parallel using self-attention',
        'A machine that translates languages word-for-word',
        'A memory bank of training data',
        'A tool that compresses text for storage'
      ],
      correctAnswer: 'A'
    },
    answerExplanation: {
      correctAnswer: 'A. A Transformer is the architecture that processes tokens in parallel using self-attention',
      details: [
        'Transformers replaced older step-by-step models with parallel processing, speeding up training and making models scalable.',
        'The key feature is self-attention, which allows the model to connect tokens across the entire sequence.',
        'Example: In "She put the book on the table because it was heavy", the model can link "it" back to "book".',
        'By stacking many Transformer layers, the model learns increasingly complex and contextual representations of text.',
        'This is the architecture that made modern LLMs possible.'
      ]
    }
  },
  {
    id: 'self-attention',
    concept: 'Self-Attention',
    explanation: {
      whatItIs: 'Self-attention is the mechanism inside Transformers that makes them powerful. It allows each token to look at every other token in the sequence and assign weights based on importance. For example, in the sentence "She put the book on the table because it was heavy", self-attention helps the model link "it" back to "book", not "table". This ability to capture long-range relationships is what older step-by-step models often missed.',
      whyItMatters: 'For users, self-attention explains why LLMs can stay on track in longer or more complex sentences. It\'s how models understand context, resolve ambiguities (like pronouns), and generate answers that feel coherent. Without self-attention, LLMs wouldn\'t be nearly as capable at following instructions or producing natural-sounding text.'
    },
    question: {
      text: 'What is self-attention in a Transformer?',
      type: 'multiple-choice',
      options: [
        'When the model repeats tokens to itself for memorization',
        'A mechanism where each token looks at other tokens to decide their importance',
        'A process that assigns random weights to tokens',
        'A memory unit that stores all past training data'
      ],
      correctAnswer: 'B'
    },
    answerExplanation: {
      correctAnswer: 'B. Self-attention is a mechanism where each token looks at other tokens to decide their importance',
      details: [
        'Each token compares itself with every other token in the sequence.',
        'The model then assigns attention weights: higher weights for tokens that are more relevant, lower weights for less important ones.',
        'Example: "She put the book on the table because it was heavy" → self-attention helps the model link "it" with "book".',
        'This mechanism lets Transformers capture context and meaning across long passages, something older models often miss.'
      ]
    }
  },
  {
    id: 'parameters',
    concept: 'Parameters',
    explanation: {
      whatItIs: 'Parameters are the long-term knowledge of an LLM. They are billions (or even trillions) of weights inside the neural network, learned during training. These parameters encode patterns in grammar, facts, reasoning, and world knowledge. Different models have different sizes: GPT-2 had about 1.5 billion parameters, GPT-3 jumped to 175 billion, while today\'s leading models like GPT-4, GPT-5, and LLaMA 2 have hundreds of billions or even trillions.',
      whyItMatters: 'For users, parameters explain why some models are more powerful than others. More parameters usually mean the model can capture more complex patterns and produce richer answers. This is why ChatGPT, Gemini, Claude, and other advanced systems feel so capable compared to earlier models — they\'ve been trained with far larger parameter sets.'
    },
    question: {
      text: 'What stores an LLM\'s long-term knowledge?',
      type: 'multiple-choice',
      options: [
        'The training data itself',
        'The embeddings layer',
        'The model\'s parameters',
        'The documents provided in the prompt'
      ],
      correctAnswer: 'C'
    },
    answerExplanation: {
      correctAnswer: 'C. The model\'s parameters',
      details: [
        'Parameters are the billions (or trillions) of weights that store what the model has learned during training.',
        'They are what give an LLM its long-term knowledge.',
        'More parameters generally mean more capacity to capture complex patterns — which is why modern models are so large.'
      ]
    }
  },
  {
    id: 'output-probabilities',
    concept: 'Output Probabilities',
    explanation: {
      whatItIs: 'After text is processed through Transformer layers, the LLM doesn\'t output a sentence all at once. Instead, it produces a probability distribution over possible next tokens. For example, after the phrase "The cat sat on the", the model might assign: "mat" → 80%, "floor" → 15%, "sofa" → 5%. The model then picks one token, adds it to the sequence, and repeats this process until a full response is generated.',
      whyItMatters: 'For users, this explains why model outputs can vary each time — because generation happens step by step, token by token. It also clarifies why the model sometimes seems very confident (when one token has a much higher probability) versus uncertain (when several options are close). Understanding this helps users see why AI answers are not "stored responses," but dynamically created sequences.'
    },
    question: {
      text: 'After processing text through Transformer layers, what does an LLM actually output?',
      type: 'multiple-choice',
      options: [
        'A complete sentence all at once',
        'The most common word from training data',
        'The entire context window back to the user',
        'A probability distribution over possible next tokens'
      ],
      correctAnswer: 'D'
    },
    answerExplanation: {
      correctAnswer: 'D. An LLM outputs a probability distribution, not a finished sentence',
      details: [
        'For each step, the model lists all possible next tokens and assigns a probability to each one.',
        'Example: After the phrase "The cat sat on the", the model might assign: "mat" → 80%, "floor" → 15%, "sofa" → 5%',
        'The model then selects one token, adds it to the sequence, and repeats the process.',
        'This "token-by-token" generation is how entire answers are built.'
      ]
    }
  },
  {
    id: 'inference-temperature',
    concept: 'Inference & Temperature',
    explanation: {
      whatItIs: 'Once the model has produced a probability distribution for the next token, it needs a way to choose which token to generate. This step is called inference. Most modern LLMs use a setting called temperature to control how tokens are chosen: Low temperature (e.g., 0.2): the model almost always picks the most likely token → predictable and safe. High temperature (e.g., 1.0–1.5): the model sometimes picks less likely tokens → more variety and creativity. By adjusting temperature, the same model can generate either very deterministic or very creative outputs.',
      whyItMatters: 'For users, temperature explains why the same prompt can produce different answers on different runs. If you want consistent, precise responses (like in coding or data tasks), a lower temperature is useful. If you want creative, open-ended responses (like for brainstorming or writing), a higher temperature can make the model more flexible.'
    },
    question: {
      text: 'How does an LLM decide which token to pick from its probability distribution?',
      type: 'multiple-choice',
      options: [
        'It uses a setting called temperature to control how tokens are chosen',
        'It always chooses the first word in the dictionary',
        'It memorizes sentences from training data and copies them',
        'It randomly picks any token with no rules'
      ],
      correctAnswer: 'A'
    },
    answerExplanation: {
      correctAnswer: 'A. LLMs use a setting called temperature to decide how to sample tokens from the probability distribution',
      details: [
        'Low temperature (e.g., 0.2): the model is predictable, almost always choosing the highest-probability token.',
        'High temperature (e.g., 1.0–1.5): the model is more creative, sometimes picking less likely tokens.',
        'This process repeats one token at a time until a full answer is generated.'
      ]
    }
  },
  {
    id: 'llm-pipeline',
    concept: 'LLM Processing Pipeline',
    explanation: {
      whatItIs: 'An LLM processes text through a specific sequence of steps, each building on the previous one. The pipeline starts with raw text input and transforms it through multiple stages: tokenization breaks text into manageable pieces, token IDs convert these pieces into numbers, embeddings add semantic meaning, tensors organize the data for processing, Transformers analyze relationships and context, probabilities are calculated for possible next tokens, and finally inference selects the actual output token. This process repeats until a complete response is generated.',
      whyItMatters: 'Understanding this pipeline helps users appreciate the complexity behind seemingly simple AI responses. Each step serves a crucial purpose, and problems at any stage can affect the final output. This knowledge helps users better understand model limitations, costs (based on tokens), and why certain inputs might produce unexpected results.'
    },
    question: {
      text: 'What is the correct order of how an LLM processes text?',
      type: 'multiple-choice',
      options: [
        'Text → Tokenization → Token IDs → Embeddings → Tensors → Transformers → Probabilities → Inference',
        'Tokenization → Inference → Transformers → Embeddings → Probabilities',
        'Embeddings → Transformers → Token IDs → Probabilities → Inference',
        'Transformers → Tokenization → Inference → Embeddings → Probabilities'
      ],
      correctAnswer: 'A'
    },
    answerExplanation: {
      correctAnswer: 'A. The full pipeline of an LLM begins with raw text and ends with a generated output, built step by step',
      details: [
        'Text (input) → raw words or sentences you type.',
        'Tokenization → split text into tokens (words, subwords, characters).',
        'Token IDs → tokens mapped to numbers from the model\'s vocabulary.',
        'Embeddings → token IDs converted into vectors that capture meaning.',
        'Tensors → embeddings stacked into multi-dimensional arrays.',
        'Transformers → tensors processed through layers using self-attention.',
        'Probabilities → model outputs likelihoods for the next token.',
        'Inference → picks a token (often controlled by temperature) and repeats until a full answer is generated.'
      ]
    }
  }
];
