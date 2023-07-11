import { makeAnswer } from 'test/factories/make-answer'
import { OnAnswerCreated } from './on-answer-created'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { InMemoryAnswerAttachmentsRepository } from 'test/repositories/in-memory-answer-attachments-repository'

let inMemoryAnswersAttachmentRepository: InMemoryAnswerAttachmentsRepository
let inMemoryAnswersRepository: InMemoryAnswersRepository

describe('on answer created', () => {
  beforeEach(() => {
    inMemoryAnswersAttachmentRepository =
      new InMemoryAnswerAttachmentsRepository()
    inMemoryAnswersRepository = new InMemoryAnswersRepository(
      inMemoryAnswersAttachmentRepository,
    )
  })

  it('should send a notification when an answer is created', async () => {
    const onAnswerCreated = new OnAnswerCreated()

    const answer = makeAnswer()

    await inMemoryAnswersRepository.create(answer)
  })
})
