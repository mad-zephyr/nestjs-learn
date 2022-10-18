import { Injectable } from '@nestjs/common';
import { FileElementResponse } from './dto/file-element.response';
import { format } from 'date-fns';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';
import * as sharp from 'sharp';
import { MFile } from './mfile.class';

@Injectable()
export class FilesService {
  async saveFiles(files: MFile[]): Promise<FileElementResponse[]> {
    const dateFolder = format(new Date(), 'yyyy-MM-dd');
    const uploadPath = `${path}/uploads/${dateFolder}`;
    await ensureDir(uploadPath);
    const res: FileElementResponse[] = [];

    for (const file of files) {
      const uploadURLPath = `${uploadPath}/${file.originalname}`;
      await writeFile(uploadURLPath, file.buffer);
      res.push({ name: file.originalname, url: uploadURLPath });
    }
    return res;
  }

  async convertToWebP(file: Buffer): Promise<Buffer> {
    return sharp(file).webp().toBuffer();
  }
}
