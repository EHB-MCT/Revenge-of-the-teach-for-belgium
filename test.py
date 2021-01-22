INPUT_DIRECTORY = 'C:\Users\Wafflemancer\Documents\MIDIs'

# TFRecord file that will contain NoteSequence protocol buffers.
SEQUENCES_TFRECORD = 'C:\Users\Wafflemancer\Documents\MIDIs\sequence'

convert_dir_to_note_sequences \
    - -input_dir =$INPUT_DIRECTORY \
    - -output_file =$SEQUENCES_TFRECORD \
    - -recursive
